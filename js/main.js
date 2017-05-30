var game = new Phaser.Game(1080, 720, Phaser.AUTO, 'phaser', { preload: preload, create: create, update: update });

function preload() {
  loadimgs();
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

var loaded_imgs = [];
var loaded_snds = [];

function loadimgs(){
  var url = 'res/loadimgs.php';
  $.post( url, function( data ) {
    var data = data.split("\n");
    data.forEach(function(i){
      if(i != ""){
        var b = baseName(i);
        loaded_imgs.push(b);
        game.load.image(b, i);
  game.load.start();
      }
    });
  });
}

function loadsnds(){
  var url = 'res/loadsnds.php';
  $.post( url, function( data ) {
    var data = data.split("\n");
    data.forEach(function(i){
      if(i != ""){
        var b = baseName(i);
        loaded_snds.push(b);
        var ogg = "res/snds/"+b+".ogg";
        game.load.audio(b, [i, ogg]);
      }
    });
  });
}

function loaded_res(){
  console.log("[Loaded Images]");
  console.log(loaded_imgs);
  console.log("[Loaded Sounds]");
  console.log();
  console.log(loaded_snds);
}

function baseName(str){
  var base = new String(str).substring(str.lastIndexOf('/') + 1); 
  if(base.lastIndexOf(".") != -1)       
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}
