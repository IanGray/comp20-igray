function init(){
	var canvas = document.getElementById('game_canvas');
	var img = new Image
	ctx = canvas.getContext('2d');
	img.src = 'pacman10-hp-sprite.png';

	img.onload = function(){
		ctx.drawImage(img,321,0,464,136,168,0,464,136);
		ctx.drawImage(img,81,22,15,15,203,30,15,15);
	}
}