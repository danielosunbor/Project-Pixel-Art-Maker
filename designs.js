// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
});

function makeGrid(row, column) {
    $('tr').remove();
    for (var i = 1; i <= row; i++) {
        $('table').append('<tr></tr>');
        for(var j = 1; j <= column; j++) {
            $('tr').last().append('<td></td>');
        }
    }
// your code goes here
// adding colors to the cells
$('td').click (function addColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).css('background-color', color);
        }
    }
)};