var Imdb = require('imdb-api');
var Keys = require('../keys.js');

function imdbInfo(name) {

    Imdb.get((name + '').replace(/,/g, ' '), {apiKey: Keys.omdbKeys['apiKey'], timeout: 30000})
    .then(function(movie) {
        console.log(
            '\nTitle: ' + movie.title
            + '\nDate: '+ movie.year
            + '\n' + movie.ratings[0].Source 
            + ': '+ movie.ratings[0].Value
            + '\n'+ movie.ratings[1].Source
            + ': '+ movie.ratings[1].Value
            + '\nCountry: ' + movie.country
            + '\nLanugages: ' + movie.languages
            + '\nPlot: ' + movie.plot+ '\n'
        );
    })
    .catch(function(err){
        imdbInfo('Mr. Nobody.');
    });
}

module.exports = {
    imdbInfo: imdbInfo
}
