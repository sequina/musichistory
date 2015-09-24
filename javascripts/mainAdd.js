requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'lodash': '../lib/bower_components/lodash/lodash.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});




 define(['jquery','populate-songs', 'lodash'],
    function ($, populate, _) {

       $("#addSong").click(function() {
            console.log("button clicked!");
            var newSong = {
              "name": $("#songName").val(),
              "artist": $("#artistName").val(),
              "album": {
                "name": $("#albumName").val(),
                "year": parseInt($("#albumYear").val(), 10)
              }
           }
          $.ajax({
                  url: "https://caromusichistory.firebaseio.com/songs.json",
                  method: "POST",
                  data: JSON.stringify(newSong)
                }).done(function(addedSong) {
                  // selectedArtist = "";
                  // selectedAlbum = "";
                  // selectedYear = "";
                  console.log("Your new song is", addedSong);
                });
      });
});




