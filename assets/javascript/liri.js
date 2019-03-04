require("dotenv").config();
//  The call to pull the spotify api
var Spotify = require('node-spotify-api');
//  call to use axios
var axios = require("axios");
//  Pull from keys.js
var keys = require("./keys.js");


//  new Spotify constructor
var spotify = new Spotify(keys.spotify);

//  Take in aguments from client. They can search albums of artists or search song name
var search= process.argv[2];
// Take in search term from client. 
var term = process.argv.slice(3).join(' ');

// Spotify search
spotify.search({ type: 'track', query: term }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

  if (search === 'albums'){
    for(var i = 0; i < 3; i++){
      var albums= data.tracks.items[i].album.name; 
      var artists= data.tracks.items[i].artists[0].name;
      var release= data.tracks.items[0].album.release_date;
      var numberOfTracks= data.tracks.items[0].album.total_tracks;
      console.log("ALBUM: ", albums);
      console.log("ARTIST: ", artists); 
      console.log("RELEASED: ", release);
      console.log("NUMBER OF SONGS: ", numberOfTracks);  
      console.log("==================")
      
   }
  }
  if (search === 'songs'){
    for(var j= 0; j<5; j++){
    var songs= data.tracks.items[j].name;
    var popularity= data.tracks.items[j].popularity;
    var artist=data.tracks.items[j].artists[0].name; 
    var songURL= data.tracks.items[j].external_urls.spotify;
    console.log("SONG NAME: ",songs);
    console.log("ARTIST: ",artist);
    console.log("Popularity", popularity);
    console.log("SONG LINK: ", songURL);
    console.log("====================")
    // findBands();
    }
  }
  

  spotify.findBands = function(bands){
    var URL = "https://rest.bandsintown.com/artists/"+ artist +"/events?app_id=6113ac60-507c-42b3-9cdd-589c5870dd8b"
    axios.get(URL).then(function(response){
      var data =response.data;
      console.log(data);
    })
 }
});



