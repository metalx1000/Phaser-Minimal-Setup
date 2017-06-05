var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

var tux;

function preload() {
  //load imgs
  preload_imgs.forEach(function(i){
    var b = baseName(i);
    game.load.image(b,i);
  });

  //load sounds
  preload_snds.forEach(function(i){
    var b = baseName(i);
    var ogg = "res/snds/"+b+".ogg";
    game.load.audio(b,[i,ogg]);
  });
}

function create() {
  game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
  createTux();
}

function update() {
}

function createTux(){
  snd = game.add.audio('1');
  tux = game.add.sprite(200, 200, "tux");
  tux.anchor.setTo(0.5, 0.5);
  tux.inputEnabled = true;
  tux.events.onInputDown.add( function(){
    snd.play();
    game.add.tween( tux ).to( { alpha: [.1,1] }, 1000, "Linear", true);
  }, this);
}
