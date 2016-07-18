var rack_size = 7;
var board_size = 15;

$(function() {
    $('#toggle_dir').click( function () {
        $(this).html( function(i, old) {
        	write_right = !write_right;
            return old === '►' ? '▼' : '►';
        });
    });
	$(document).keydown(function (e) {
        if (e.which == toggle_dir_key && !$('#toggle_dir').is(":focus")) {
            $('#toggle_dir').click();
        }
    });
	var $tile = $('<input>', {
		'class' : 'rack tile',
		'type' : 'text',
		'maxlength' : '1',
	});
	var $cell = $('<td>', {});
	$cell.append($tile);
	var $rack = $('<tr>', {});
	for (var i = 0; i < rack_size; i++) {
		$rack.append($cell.clone());
	}
	$('#rack').append($rack);
	$('input:first').focus();

	var $board_tile = $('<input>', {
		'class': 'board tile',
		'type' : 'text',
		'maxlength' : '1',
	});
	$bonus_t = $board_tile.clone();
	$bonus_t.addClass('bonus');
	$red_t = $bonus_t.clone();
	$red_t.addClass('red');
	$red_t.attr('placeholder', '2W');
	$rred_t = $bonus_t.clone();
	$rred_t.addClass('rred');
	$rred_t.attr('placeholder', '3W');
	$blue_t = $bonus_t.clone();
	$blue_t.addClass('blue');
	$blue_t.attr('placeholder', '2L');
	$bblue_t = $bonus_t.clone();
	$bblue_t.addClass('bblue');
	$bblue_t.attr('placeholder', '3L');
	$center_t = $bonus_t.clone();
	$center_t.addClass('center');
	
	var board_tiles = [$board_tile, $red_t, $rred_t, $blue_t, $bblue_t, $center_t];
	var r1 = [2, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 2];
	var r2 = [0, 1, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 1, 0];
	var r3 = [0, 0, 1, 0, 0, 0, 3, 0, 3, 0, 0, 0, 1, 0, 0];
	var r4 = [3, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 3];
	var r5 = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
	var r6 = [0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0];
	var r7 = [0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 0, 0];
	var r8 = [2, 0, 0, 3, 0, 0, 0, 5, 0, 0, 0, 3, 0, 0, 2];
	board = [r1, r2, r3, r4, r5, r6, r7, r8, r7, r6, r5, r4, r3, r2, r1];

	for (var row in board) {
		var $row = $('<tr>', {});
		for (var tile_num in board[row]) {
			var $tile = board_tiles[board[row][tile_num]].clone();
			var $cell = $('<td>', {});
			$cell.append($tile);
			$row.append($cell);
		}
		$('#board').append($row);
	}
});