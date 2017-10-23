var game = new Phaser.Game(854, 480, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

var player, fullscreenIcon;

function preload() {
  //load imgs and sounds
  preloader();

  //load tile maps
  game.load.tilemap('map', 'res/maps/map0.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', 'res/tiles/tiles.png');

}

function create() {
  //start physics system
  //game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);

  //add fullscreen icon
  fullscreenIcon = fsIcon({x:game.width - 50,y:10});

}


function update() {

}
