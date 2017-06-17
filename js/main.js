var game = new Phaser.Game(854, 480, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

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
  //create sprite
  player = game.add.sprite(200, 200, "tux");
  player.anchor.setTo(0.5, 0.5);

  //add gravity to sprite -- don't forget to change sprite
  gravity({sprite:player, bounce: 0.5, world: true, gravity: 1500});

}

function update() {
  keys(player);
  //Sprite to Follow Mouse
  followMouse({sprite:player,vel:1500});


}

function keys(obj,speed){
  if(typeof speed === "undefined"){speed = 5}
  // Check key states every frame.
  // Move ONLY one of the left and right key is hold.
  var left = game.input.keyboard.isDown(Phaser.Keyboard.LEFT)
  var right = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)
  var up = game.input.keyboard.isDown(Phaser.Keyboard.UP)
  var down = game.input.keyboard.isDown(Phaser.Keyboard.DOWN)
  var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  if (left){
    obj.x -= speed;
  }
  else if (right){
    obj.x += speed;
  }

  if (up){
    obj.y -= speed;
  }
  else if (down){
    obj.y += speed;
  }

  if (space){

  }
}


