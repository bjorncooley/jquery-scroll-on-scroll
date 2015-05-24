var lastScrollTop;

$(function(){

    lastScrollTop = 0;

    $(window).scroll(function(){

        getScrollDirection();
        
    });
});

function getScrollDirection() {

    var currentScrollTop = $(this).scrollTop();

    if ( currentScrollTop > lastScrollTop ) {
        console.log("down");
    } else {
       console.log("Up");
    }

    lastScrollTop = currentScrollTop;
}