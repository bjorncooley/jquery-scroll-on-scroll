var direction;

$(function(){

    $('body').css('overflow', 'hidden');
    $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', scrollFunctions);
});

function scrollFunctions() {

    getScrollDirection();
    scrollOnScroll();
}

function scrollOnScroll() {

    if ( direction != undefined ) {

        var activeScrollSection = $('.scroll-target.active');

        if ( !activeScrollSection.hasClass('animating') ) {

            if ( direction == 'down' ) {
                var scrollTarget = activeScrollSection.next('.scroll-target');
            } else {
                var scrollTarget = activeScrollSection.prev('.scroll-target');
            }

            if ( scrollTarget.length != 0 ) {
                var scrollTargetTop = scrollTarget.offset().top;
            }

            activeScrollSection.addClass('animating');

            $('html, body').animate({ scrollTop: scrollTargetTop}, 1400, function() {

                scrollTarget.addClass('active'); 
                activeScrollSection.removeClass('active').removeClass('animating'); 

                $(document).off('mousewheel DOMMouseScroll MozMousePixelScroll', scrollFunctions);  

                setTimeout(function(){
                    $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', scrollFunctions); 
                }, 500); 
                 
            });
        }
    }
}

function getScrollDirection() {

    $('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta / 120 > 0) {
            direction = 'up';
        }
        else{
            direction = 'down';
        }
    });
}