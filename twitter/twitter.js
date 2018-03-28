var Twitter = require('twitter');
var Moment = require("moment");
var Keys = require('../keys.js');

var twitClient = new Twitter({
    consumer_key: Keys.twitterKeys['consumer_key'],
    consumer_secret: Keys.twitterKeys['consumer_secret'],
    access_token_key: Keys.twitterKeys['access_token_key'],
    access_token_secret: Keys.twitterKeys['access_token_secret']
});

function myTweets(params) {
    twitClient.get('statuses/user_timeline', params).then(function(tweets) {
        console.log('\n');
        for(var i = 0; i < (tweets.length < 20 ? tweets.length : 20); i++) {
            var date = new Date(tweets[i].created_at);
            console.log(
                '\nUser: ' + params.screen_name
                + '\"\nDate: ' + Moment(date).format('LLL')
                + '\nTweet: \"' + tweets[i].text 
                + '\"\n'
            );
        }
        console.log('\n');
    })
    .catch(function(err){
        console.log(err);
    });
};

module.exports = {
    myTweets: myTweets
};