 define(['jquery','populate-songs','bootstrap','lodash'],
    function ($, populate,bootstrap,lodash) {

    populate.getSongs(function(songList) {
      require(['hbs!../templates/songs'], function(tmplSongs){
        $("#songList").html(tmplSongs(songList));
      });
    });

});



