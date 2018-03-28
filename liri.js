var request = require('keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

var client = new Twitter(request.Keys);

var task = process.argv[2];

if (task == 'twitter') {
var params = {screen_name:" "};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if(!error){
		for ( i = 0; i < 20; i++) {
			console.log(tweets[i].text);
		}		
	}
});
};

if (task == 'spotify'){
	var song = process.argv[3];

	if (song !== undefined) {

		spotify.search({type:'track', query: song}, function(err, data){
			if (err) {
				console.log('Error occured: ' + err);
				return;
			} else {
				console.log('Song:' + data.tracks.item[0].track)//track
				console.log('Artist: ' + data.tracks.items[0].artists[0].name) //artist
				console.log('Track: ' + data.tracks.items[0].name) //track
				console.log('Preview: ' + data.tracks.items[0].preview_url) //preview url
				console.log('Album: ' + data.tracks.items[0].album.name) //album
			};
		});

	} else {
		spotify.search({type:'track', query: 'track'}, function(err, data){
			if (err) {
				console.log('Error occured: ' + err);
				return;
			} else {

				console.log('Artist: ' + data.tracks.items[0].artists[0].name) //artist
				console.log('Track: ' + data.tracks.items[0].name) //track
				console.log('Preview: ' + data.tracks.items[0].preview_url) //preview url
				console.log('Album: ' + data.tracks.items[0].album.name) //album

			}
		});

	};
};
	


