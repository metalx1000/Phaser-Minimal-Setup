function baseName(str){
  var base = new String(str).substring(str.lastIndexOf('/') + 1);
  if(base.lastIndexOf(".") != -1)
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}

function fscreen(){
  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.startFullScreen();
}

function gravity(d){
  //collide with world
  if(typeof d.world === "undefined"){ d.world = true;}
  if(typeof d.bounce === "undefined"){ d.bounce = 0.2}
  if(typeof d.gravity === "undefined"){ d.gravity = 200}
  //don't forget to start system physics
  game.physics.enable(d.sprite, Phaser.Physics.ARCADE);
  d.sprite.body.collideWorldBounds = d.world;
  d.sprite.body.bounce.set(d.bounce);
  d.sprite.body.gravity.y = d.gravity;
}

function followMouse(d) {
  if(typeof d.vel === "undefined"){
    d.vel = 400;
  }else{
    d.vel = d.vel*100;
  }
  //If you've set physics for this obj already you can comment the next line out
  game.physics.enable(d.sprite, Phaser.Physics.ARCADE);

  //  400 is the speed it will move towards the mouse
  game.physics.arcade.moveToPointer(d.sprite, d.vel);

  //  if it's overlapping the mouse, don't move any more
  if (Phaser.Rectangle.contains(d.sprite.body, game.input.x, game.input.y)){
    d.sprite.body.velocity.setTo(0, 0);
  }

}

function clickObj(d){
  if(typeof d.func === "undefined"){d.func = function(){console.log("Clicked")}}

  d.sprite.inputEnabled = true;
  d.sprite.events.onInputDown.add( d.func, d.sprite);
}

function paint(d){
  if(typeof d === "undefined"){d = {}}
  if(typeof d.color === "undefined"){d.color = 0xff0000}

  if(typeof d.size === "undefined"){d.size = 10}
  if(typeof d.style === "undefined"){d.style = 1}

  var graphics = game.add.graphics(0, 0);

  //if color is random
  if(d.color == "random"){
    d.color = Phaser.Color.getRandomColor(50, 255, 255);
  }

  //set style
  if(d.style == 1){
    graphics.lineStyle(2, d.color, 1);
  }else{
    graphics.beginFill(d.color, 1);
  }
  graphics.drawCircle(game.input.x, game.input.y, d.size);

}

function mouseDown(d){
  //  only move when you click
  if (game.input.activePointer.isDown){
    d.onClick(d.sprite); 
  }
  else{
    d.onRelease(d.sprite);
  }
}

function loadMap(){
  map = game.add.tilemap('map');
  map.addTilesetImage('tiles');
  layer = map.createLayer('layer1');
  layer.resizeWorld();
  map.setCollisionBetween(1, 12);
}

