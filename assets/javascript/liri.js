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

  if (search === 'albums'){
    for(var i = 0; i < 3; i++){
      var albums= data.tracks.items[i].album.name; 
      var artists= data.tracks.items[i].artists[0].name;
      console.log("ALBUM: ", albums)
      console.log("ARTIST: ", artists)   
   }
  }
  if (search === 'songs'){
    for(var j= 0; j<5; j++){
    var songs= data.tracks.items[j].name;
    var artist=data.tracks.items[j].artists[0].name; 
    console.log("SONG NAME: ",songs);
    console.log("Artist: ",artist);
    }
  }
  
  });