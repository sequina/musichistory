 define(['jquery','populate-songs', 'lodash'],
    function ($, populate, _) {

    populate.getSongs(function(songList) {

      var uniqueArtists = _.uniq(songList.songs, "artist");
      var uniqueAlbums = _.uniq(songList.songs, "album");

      require(['hbs!../templates/songs'], function(tmplSongs){
        $("#songList").html(tmplSongs(songList));
      });

      require(['hbs!../templates/artists'], function(tpl){
        $("#artists").html(tpl({artists: uniqueArtists}));
      });

      require(['hbs!../templates/albums'], function(tpl){
        $("#albums").html(tpl({albums: uniqueAlbums}));
      });



    });

});



