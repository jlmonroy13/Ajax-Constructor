var playlist = new Playlist;


var hereComesTheSun = new Song("Here Comes the sun", "The Beatles", "2:45");
var walkingOnSunshine = new Song("walking On Sunshine", "Katrina and the waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

console.log(playlist);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function () {
	playlist.play();
	playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById('next');
nextButton.onclick = function () {
	playlist.next();
	playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById('stop');
stopButton.onclick = function () {
	playlist.stop();
	playlist.renderInElement(playlistElement);
}
