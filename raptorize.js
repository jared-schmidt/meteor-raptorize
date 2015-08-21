if (Meteor.isClient) {

    var locked = false;

    // TODO: This is set to always false go now
    var audioSupported = false;
    // var raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="raptor-sound.mp3" /><source src="raptor-sound.ogg" /></audio>';


    Raptorize = function() {
        // Add img if not on page
        if ($('#elRaptor').length <= 0) {
            $('body').append('<img id="elRaptor" style="display: none" src="/packages/jschmidt_raptorize/Raptorize-Kit/raptor.png" />');
        }

        init($('#elRaptor').css({
            "position": "fixed",
            "bottom": "-700px",
            "right": "0",
            "display": "block"
        }));
    };

    function init(raptor) {
        locked = true;

        //Sound Hilarity
        if (audioSupported) {
            function playSound() {
                document.getElementById('elRaptorShriek').play();
            }
            playSound();
        }

        // Movement Hilarity
        raptor.animate({
            "bottom": "0"
        }, function() {
            $(this).animate({
                "bottom": "-130px"
            }, 100, function() {
                var offset = (($(this).position().left) + 400);
                $(this).delay(300).animate({
                    "right": offset
                }, 2200, function() {
                    raptor = $('#elRaptor').css({
                        "bottom": "-700px",
                        "right": "0"
                    })
                    locked = false;
                })
            });
        });
    }
}
