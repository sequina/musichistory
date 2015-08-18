$(document).ready(function() {

	$.ajax({
			url: "./mysongs.json"
		}).done(function(songList) {
			music(songList);
		});

	function music(songList) {
		for (var i = 0; i < songList.songs.length; i ++) {
			var currentSong = songList.songs[i];
			console.log(currentSong);
			$("#listOfSongs").append("<div class = 'songItem" + i + "'/>");
			$(".songItem" + i).append("<h1>"+ currentSong.title +"</h1>");
			$(".songItem" + i).append("<h2>"+ currentSong.artist +"</h2>");
			$(".songItem" + i).append("<h3>"+ currentSong.album +"</h3>");
			$(".songItem" + i).append( "<button class = 'deleteOption'>Delete This Song</button>");
		}
	}


	$("#moreSongs").click(function() {
	$.ajax({
			url: "./more-songs.json"
		}).done(function(songList2) {
			music(songList2);
		});
});

	$(document).on("click", ".deleteOption", function() {
		$(this).parent().empty();
		console.log($(this).parent())
	});

});