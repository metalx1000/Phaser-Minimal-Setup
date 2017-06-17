<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Game</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
      canvas {
        padding-left: 0;
        padding-right: 0;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 800px;
      }

    </style>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="https://cdn.jsdelivr.net/phaser/2.6.2/phaser.min.js"></script>
    <script>
      var preload_imgs = <?php include("loadimgs.php");?>;
      var preload_snds = <?php include("loadsnds.php");?>;
    </script>
    <script src="js/functions.js"></script>
    <script src="js/main.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="btn-group btn-group-justified">
        <a id="fscreen" class="btn btn-primary" onclick="fscreen()">Fullscreen</a>
      </div>
    </div>

  </body>
</html>
