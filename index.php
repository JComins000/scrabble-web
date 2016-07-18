<!DOCTYPE html>
<html>
<head>
<link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700,900' rel='stylesheet' type='text/css'>
<link rel='stylesheet' type='text/css' href='css/style.css'>
<link rel='icon' type='image/jpeg' href='img/star.png'>
<script src='http://code.jquery.com/jquery-3.0.0.min.js'></script>
<script type='text/javascript' > 
	var write_right = true;
    var toggle_dir_key = 32;
    var blank_ascii = 46;
    var blank_keycode = 190;
</script>
<script src='js/gen_board.js'></script>
<script src='js/tile.js'></script>

</head>
<body>
<div class='contain'>
    <table id='board'></table>
    <table class='contain'><tr><td><table id='rack'></table></td>
    <td><button id='toggle_dir' class='btn' title='Type direction: toggle with [space]'>►</button></td></tr></table>
</div>
</body>
</html>
<!-- $userfile = fopen($target_file, 'r') or die('Unable to open file!');
$file_contents = fread($userfile,filesize($target_file));
fclose($userfile); -->
<!--             
	// NUMBERED TILES
	// SCORE WORD PHP
-->