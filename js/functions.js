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
  if(typeof d.vel === "undefined"){d.vel = 400;}
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
  d.sprite.events.onInputDown.add( d.func, this);
}


