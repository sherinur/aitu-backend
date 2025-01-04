function search() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const query = searchInput.value;

            try {
                const artists = await getArtists(query)
                const tracks = await getTracks(query)

                if (artists) {
                    generateArtists(artists)
                }
                
                if (tracks) {
                    generateTracks(tracks)
                }
            } catch (error) {
                console.error(error)
            }
        });
    }
}

async function getArtists(query) {
    const response = await fetch('/search/artists?query=' + query, {
        method: 'GET'
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData)
        return;
    }

    const responseData = await response.json();
    return responseData
}


async function getTracks(query) {
    const response = await fetch('/search/tracks?query=' + query, {
        method: 'GET'
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData)
        return;
    }

    const responseData = await response.json();
    return responseData
}


// cards HTML generator for artists
function generateArtists(artists) {
    const resultsContainer = document.querySelector('.results-artists');
    
    if (resultsContainer) {
        resultsContainer.innerHTML = '<h2 class="results-title">Artists</h2>';

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
                      ${artist.genres.join(', ')}
                    </p>
                    <p class="card-text">Followers: ${artist.followers.total.toLocaleString()}</p>
                    <p class="card-text">Popularity: ${artist.popularity}</p>
                    <a href="${artist.external_urls.spotify}" class="btn btn-outline-success" target="_blank">View on Spotify</a>
                  </div>
                </div>
              </div>
            `;

            resultsContainer.innerHTML += cardHTML;
        });
    }
    
}

// cards HTML generator for tracks
function generateTracks(tracks) {
    const resultsContainer = document.querySelector('.results-tracks');
    
    if (resultsContainer) {
        resultsContainer.innerHTML = '<h2 class="results-title">Tracks</h2>';

        tracks.forEach(track => {
            const cardHTML = `
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100">
                  <a href="${track.external_urls.spotify}" target="_blank">
                    <img src="${track.album.images[1].url}" class="card-img-top" alt="${track.name}">
                  </a>
                  <div class="card-body">
                    <h5 class="card-title">${track.name}</h5>
                    <p class="card-text">
                      Artist: ${track.artists.map(artist => artist.name).join(', ')}
                    </p>
                    <p class="card-text">
                      Album: <a href="${track.album.external_urls.spotify}" target="_blank">${track.album.name}</a>
                    </p>
                    <p class="card-text">Duration: ${formatDuration(track.duration_ms)}</p>
                    <a href="${track.external_urls.spotify}" class="btn btn-outline-success" target="_blank">Listen on Spotify</a>
                  </div>
                </div>
              </div>
            `;

            resultsContainer.innerHTML += cardHTML;
        });
    }
}

function formatDuration(durationMs) {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = ((durationMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
}


document.addEventListener('DOMContentLoaded', search);
