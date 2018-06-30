// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!

    const height = $('#inputHeight').val();
    const weight = $('#inputWeight').val();
    const table = $('#pixelCanvas');
    const color = $('#colorPicker');
    table.children().remove();

    for (let p = 0; p < height; p++) {
        table.append('<tr></tr>');
        for (let a = 0; a < weight; a++) {
            $('tr').last().append('<td></td>');
        }
    }

    table.on('click', 'td', function() {
        $(this).css('background-color', color.val());
    });
}

$("#button").click(function(evt) {
    evt.preventDefault();

    makeGrid();
});