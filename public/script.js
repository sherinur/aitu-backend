document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultElement = document.getElementById('result');
    const commentElement = document.querySelector('.comment');
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modalText');
    const closeModalButton = document.querySelector('.close');

    // close modal
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
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

            
        //     const responseData = await response.json();

        //     if (responseData) {
        //         if (responseData.bmi) {
        //             resultElement.textContent = responseData.bmi;
        //         }
               
        //         if (responseData.category) {
        //             commentElement.textContent = responseData.category || 'No category';
        //         }
        //     } else {
        //         showModal('Error occured while calculating the BMI')
        //     }
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