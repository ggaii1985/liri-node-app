var Spotify = require('node-spotify-api');
var Keys = require('../keys.js');

var spotify = new Spotify({
    id: Keys.spotifyKeys['client_id'],
    secret: Keys.spotifyKeys['client_secret']
});

function searchSong(songName) {
    spotify.search({ type: 'track', query: songName })
    .then(function(response) {
        var items = response.tracks.items;
        for(var i = 0; i < items.length; i++) {
            console.log(
                // '\nArtist: ' + items[0].artists[0].name
                // + '\nSong Name: ' + items[0].name
                // + '\nPreview URL: ' + items[0].preview_url
                // + '\nAlbum: ' + items[0].album.name
                '\nArtist: ' + items[i].artists[0].name
                + '\nSong Name: ' + items[i].name
                + '\nPreview URL: ' + items[i].preview_url
                + '\nAlbum: ' + items[i].album.name
            );
        }
        console.log('\n');
    })
    .catch(function(err) {
        searchSong('The Sign');
    });
};

function findSong(songName) {
    return new Promise(function(resolve, reject) {
        spotify.search({ type: 'track', query: songName }, function(err, data) {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log(data); 
            resolve(data);
        });
    });
}

module.exports = {
    searchSong: searchSong,
    findSong: findSong
};