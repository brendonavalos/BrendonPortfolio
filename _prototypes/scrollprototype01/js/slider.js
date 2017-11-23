$(document).ready(function() {
    $('.slidenav').animate({
        marginTop: '-200px'
    }, 200);
    $('.open a').toggle(
        function(){
            $('.slidenav').animate({
                marginTop: '0'
            }, 500);
        },
        function(){
            $('.slidenav').animate({
                marginTop: '-200px'
            }, 500);
    });
    });