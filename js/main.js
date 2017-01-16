jQuery(document).ready(function($) {

    // Google Analytics Events
    $('.download-btn').on('click', function() {

        ga( 'send', 'event', 'Download Button', 'click', 'Mac', {'nonInteraction': true} );

    });
    
});
