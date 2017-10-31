
$(function () {

    $('img').on('click', function () {
        $('img').animate({
            top: '100px',
            left: '200px',
            height: '+=200px',
            width: '+=200px'

        }, 500);
    });
    $('button').on('click', function () {
        $('img').animate({
            
            left: '200px',
            height: '-=200px',
            width: '-=200px'

        }, 500);
    });







});