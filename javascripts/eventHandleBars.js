$(document).on("click","a[id^='delete#']"), function (options) {
    console.log("button clicked")
    var uniqueIdentifier = $(this).attr("id").split("#") [1];
    console.log(this.id, "https://caromusichistory.firebaseio.com/songs/") + this.id.split ("#") [1] + ".json");

  $.ajax({
      url: "https://caromusichistory.firebaseio.com/songs/") + this.id.split ("#") [1] + ".json");
      method: "DELETE",
      contentType: "application/json"
    }).done(function(song){
      console.log("You have deleted a song!");
  });
})




