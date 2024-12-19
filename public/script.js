document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const backButton = document.getElementById('back');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultElement = document.getElementById('result');
    const commentElement = document.querySelector('.comment');
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modalText');
    const closeModalButton = document.querySelector('.close');

    backButton.style.display = 'none';

    // close modal
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            submitButton.style.display = 'block';
            backButton.style.display = 'none';
            resultElement.textContent = '0.00';
            commentElement.style.display = 'none';
        });
    }

    submitButton.addEventListener('click', async () => {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if(!height || ! weight) {
            showModal('Height and weight are required!');
            return;
        }

        const requestBody = {
            height, 
            weight
        };

        try {
            const response = await fetch('/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                showModal(errorData.message);
                return;
            }

            const responseData = await response.json();

            if (typeof responseData.bmi === 'string') {
                showModal(`Error: ${responseData.bmi}`);
                return;
            }

            if (responseData) {
                submitButton.style.display = 'none';
                backButton.style.display = 'block';

                if (responseData.bmi) {
                    resultElement.textContent = responseData.bmi;
                    console.log(responseData.bmi)
                } else {
                    return;
                }
               
                if (responseData.category && responseData.comment) {
                    commentElement.style.display = 'block';
                    commentElement.textContent = `${responseData.comment}`;
                } else {
                    return;
                }
            }
        } catch(error) {
            showModal(`Error: ${error.message}`);
        }
    });

    // open modal
    function showModal(message) {
        modalText.textContent = message;
        modal.style.display = 'block';
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});

function doRequest(requestBody) {
    
}