jQuery(function($) {
    var opts = {
        $menu: $('.site-nav'),
        directionThreshold: 100,
        easing: 'swing',
        keyboardNavigation: {
            enabled: true,
            wrapAround: false
        },
        menuSelector: '.site-nav-link',
        offset: 40
    };
    $('.site-content').panelSnap(opts);
});