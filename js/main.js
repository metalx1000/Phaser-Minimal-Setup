var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

var player;

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
  //start physics system
  //game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = Phaser.Color.getRandomColor(50, 255, 255);
  player = createObj("tux");
}

function update() {
}

function createObj(s){
  snd = game.add.audio('1');
  var o = game.add.sprite(200, 200, s);
  o.anchor.setTo(0.5, 0.5);
  o.inputEnabled = true;
  o.events.onInputDown.add( function(){
    snd.play();
    game.add.tween( o ).to( { alpha: [.1,1] }, 1000, "Linear", true);
  }, this);

  return o;
}
