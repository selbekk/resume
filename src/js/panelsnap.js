$(function() {
    var opts = {
        //$menu: $('.site-nav-list'),
        //menuSelector: '.site-nav-link',
        //panelSelector: '> .fullsize-panel',
        offset: 40,
        directionThreshold: 40,
        onSnapStart: function(e) { console.log('start', e); },
        onSnapFinish: function(e) { console.log('end', e); }
    };
    $('.site-content').panelSnap(opts);
});