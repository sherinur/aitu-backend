function search() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const query = searchInput.value;
            
            const urlPattern = '/search?query=' + query

            try {
                const response = await fetch(urlPattern, {
                    method: 'GET'
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.log(errorData)
                    return;
                }

                const responseData = await response.json();

                if (responseData) {
                    generateCards(responseData)
                }

            } catch (error) {
                console.error(error)
            }
        });
    }
}

// cards HTML generator
function generateCards(artists) {
    const resultsContainer = document.querySelector('.results-artists');
    
    if (resultsContainer) {
        resultsContainer.innerHTML = '';

        artists.forEach(artist => {
            const cardHTML = `
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100">
                  <a href="${artist.external_urls.spotify}" target="_blank">
                    <img src="${artist.images[0].url}" class="card-img-top" alt="${artist.name}">
                  </a>
                  <div class="card-body">
                    <h5 class="card-title">${artist.name}</h5>
                    <p class="card-text">
                      <small class="text-muted">${artist.genres.join(', ')}</small>
                    </p>
                    <p class="card-text">Followers: ${artist.followers.total.toLocaleString()}</p>
                    <p class="card-text">Popularity: ${artist.popularity}</p>
                    <a href="${artist.external_urls.spotify}" class="btn btn-primary" target="_blank">View on Spotify</a>
                  </div>
                </div>
              </div>
            `;
            
            resultsContainer.innerHTML += cardHTML;
        });
    }
    
}

document.addEventListener('DOMContentLoaded', search);
