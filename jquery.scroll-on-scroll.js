var lastScrollTop;

$(function(){

    var direction = 'down';

    lastScrollTop = 0;

    $(window).on('scroll', scrollOnScroll);
});

function scrollOnScroll() {


    var windowTop = $(window).scrollTop();
    var activeScrollSection = $('.scroll-target.active');
    var scrollTarget = activeScrollSection.next('.scroll-target');

    if ( scrollTarget.length != 0 ) {
        var scrollTargetTop = scrollTarget.offset().top;
    }
    

    direction = getScrollDirection();

    if ( !activeScrollSection.hasClass('animating') ) {

        $(window).off('scroll', scrollOnScroll);

        if ( windowTop < scrollTargetTop && direction == 'down' ) {

            activeScrollSection.addClass('animating');

            $('html, body').stop().animate({ scrollTop: scrollTargetTop}, 1000, function() {

                scrollTarget.addClass('active'); 
                activeScrollSection.removeClass('active').removeClass('animating');
                
                // Clear/wait for residual scroll functions
                $(window).clearQueue();
                setTimeout(function(){
                    $(window).on('scroll', scrollOnScroll);
                }, 100);                

            });
        }
    }
}

function getScrollDirection() {

    var currentScrollTop = $(this).scrollTop();
    var direction;

    if ( currentScrollTop > lastScrollTop ) {
        direction = 'down';
    } else {
       direction = 'up';
    }

    lastScrollTop = currentScrollTop;
    return direction;
}