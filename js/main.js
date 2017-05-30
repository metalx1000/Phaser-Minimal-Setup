var game = new Phaser.Game(1080, 720, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

function preload() {
  preload_imgs.forEach(function(i){
    var b = baseName(i);
    console.log(b);
    game.load.image(b,i);
  });

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
  tux.anchor.set(0.5);
  tux.inputEnabled = true;
  tux.events.onInputDown.add( function(){snd.play();}, this); 
}

function test(){
  console.log(this);
}

function update() {
}

function createPlayer(x,y){
}

function playerUpdate(){
}

function createPlatform(){
}

function baseName(str){
  var base = new String(str).substring(str.lastIndexOf('/') + 1); 
  if(base.lastIndexOf(".") != -1)       
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}
