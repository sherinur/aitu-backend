import SpotifyWebApi from 'spotify-web-api-node';

export class SearchService {
    constructor() {
        this.spotifyApi = new SpotifyWebApi({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET
          });
    }

    async authenticate() {
        try {
            const data = await this.spotifyApi.clientCredentialsGrant();
            console.log('Access token:', data.body['access_token']);

            this.spotifyApi.setAccessToken(data.body['access_token']);
        } catch (error) {
            console.error('Error authenticating:', error);
            throw new Error('Authentication failed');
        }
    }

    async searchArtists(query) {
        try {
            const data = await this.spotifyApi.searchArtists(query);
            return data.body.artists.items;
        } catch (error) {
            console.error("Error searching:", error);
            throw new Error('Failed to search');
        }
    }

    async searchTracks(query) {
        try {
            const data = await this.spotifyApi.searchTracks(query);
            return data.body.tracks.items;
        } catch (error) {
            console.error("Error searching:", error);
            throw new Error('Failed to search');
        }
    }
}