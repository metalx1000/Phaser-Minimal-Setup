var game = new Phaser.Game(1080, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
}

function create() {
}

function update() {
}

function createPlayer(x,y){
}

function playerUpdate(){
}

function createPlatform(){
}

function loadimgs(){
  var url = 'res/loadimgs.php';
  $.post( url, function( data ) {
    var data = data.split("\n");
    data.forEach(function(i){
      if(i != ""){
        var b = baseName(i);
        game.load.image(b, i);
      }
    });
  });
}

function baseName(str){
   var base = new String(str).substring(str.lastIndexOf('/') + 1); 
    if(base.lastIndexOf(".") != -1)       
        base = base.substring(0, base.lastIndexOf("."));
   return base;
}
