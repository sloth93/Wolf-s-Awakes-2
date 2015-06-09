var game = new Phaser.Game(1000, 600, Phaser.AUTO, 'gameDiv');

  var posicion; 
  var pociones;

game.global = {
	score: 0
};

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('boot');