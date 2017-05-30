var game = new Phaser.Game(1080, 720, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

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
  snd = game.add.audio('1');
  var tux = game.add.sprite(200, 200, "tux");
  tux.anchor.setTo(0.5, 0.5);
  tux.inputEnabled = true;
  tux.events.onInputDown.add( function(){snd.play();}, this); 
}

function update() {
}
