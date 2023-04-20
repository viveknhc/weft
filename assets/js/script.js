jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
  /*  center:true,   make center the div*/
    // stagePadding: 50,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        1024: {
            items: 5
        },

        1366: {
            items: 6
        }
    }
});