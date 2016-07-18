$(function() {
    var charLimit = 1;
    var arrow_keys = [37, 38, 39, 40];
    var numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    var other_keys = [8, 9, 13, 32, 105, 106, 107, 109, 110, 111, 112,
        113, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222];
    var keys = arrow_keys.concat(other_keys).concat(numbers);
    $('input').bind('focus_left', function () {
        $(this).parent().prev('td').children().first().focus();
    });
    $('input').bind('focus_right', function () {
        $(this).parent().next('td').children().first().focus();
    });
    $('input').bind('focus_down', function () {
        $this = $(this);
        var cellIndex = $this.parent().index();
        $this.closest('tr').next().children().eq(cellIndex).children().first().focus();
    });
    $('input').bind('focus_up', function () {
        $this = $(this);
        var cellIndex = $this.parent().index();
        $this.closest('tr').prev().children().eq(cellIndex).children().first().focus();
   });
    $('.tile').keydown(function (e) {
        if (e.which == 8) {
            if (this.value.length == 0) {
                if (write_right || $(this).hasClass('rack')) {
                    $(this).trigger('focus_left');
                } else {
                    $(this).trigger('focus_up');
                }
            } else {
                return true;
            }
        }
        else if ($.inArray(e.which, keys) >= 0) {
            if (e.which == toggle_dir_key) {
                $('#toggle_dir').click();
            } else if (e.which == blank_keycode) {
                if ($(this).hasClass('rack')) {
                    return true;
                }
                $(this).toggleClass('blank');
            } else if ($.inArray(e.which, arrow_keys) >= 0) {
                switch (e.which) {
                    case 37:
                        $(this).trigger('focus_left');
                        break;
                    case 38:
                        $(this).trigger('focus_up');
                        break;
                    case 39:
                        $(this).trigger('focus_right');
                        break;
                    case 40:
                        $(this).trigger('focus_down');
                }
            }
            return false;
        }
        return true;
    }).on('input', function (e) {
        var letter = this.value.charCodeAt(0);
        var isAlpha = letter >= 65 && letter <= 122;
        var isDot = $(this).hasClass('rack') && letter == blank_ascii;
        console.log($(this).hasClass('rack'), letter, blank_ascii)
        if (this.value.length == 1 && (isAlpha || isDot)) {
            $(this).val(function (_, val) {
                return val.toUpperCase();
            });
            if (write_right || $(this).hasClass('rack')) {
                $(this).trigger('focus_right');
            } else {
                $(this).trigger('focus_down');
            }
        }
        else {
            $(this).val('');
        }
    }).focus(function() {
        $(this).select();
    }).mouseup(function (e){
        e.preventDefault();
    });
});