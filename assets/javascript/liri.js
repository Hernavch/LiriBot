require("dotenv").config();
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");



var spotify = new Spotify(keys.spotify);

var search= process.argv[2];

var term = process.argv.slice(3).join(' ');

spotify.search({ type: 'track', query: term }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0]); 
  });