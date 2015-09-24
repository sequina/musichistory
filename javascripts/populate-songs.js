define(function () {
  return  {
    getSongs: function (callBack)  {
      $.ajax({
        url: "https://caromusichistory.firebaseio.com/.json"
        }).done(function(data) {

          var songs = [];
          for (var key in data.songs) {
            var songWithId = data.songs[key];
            songWithId.key = key;
            songs[songs.length] = songWithId;
          }
// var allSongsArray = {songs:[]};
          console.log("songWithId",songs);
          callBack({"songs":songs});
          });
        }
      };
  });




