$(document).ready(function() {
    // Nav Tabs jQuery 
    $('ul.tabs button').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs button').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });



    $("#hide").click(function() {
        $("#hide2").remove();
    });

    // For Magnifying Glass
    ! function($) {

        "use strict"; // jshint ;_;

        /* MAGNIFY PUBLIC CLASS DEFINITION
         * =============================== */

        var Magnify = function(element, options) {
            this.init('magnify', element, options)
        }

        Magnify.prototype = {

            constructor: Magnify

                ,
            init: function(type, element, options) {
                    var event = 'mousemove',
                        eventOut = 'mouseleave';

                    this.type = type
                    this.$element = $(element)
                    this.options = this.getOptions(options)
                    this.nativeWidth = 0
                    this.nativeHeight = 0

                    this.$element.wrap('<div class="magnify" \>');
                    this.$element.parent('.magnify').append('<div class="magnify-large" \>');
                    this.$element.siblings(".magnify-large").css("background", "url('" + this.$element.attr("src") + "') no-repeat");

                    this.$element.parent('.magnify').on(event + '.' + this.type, $.proxy(this.check, this));
                    this.$element.parent('.magnify').on(eventOut + '.' + this.type, $.proxy(this.check, this));
                }

                ,
            getOptions: function(options) {
                    options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

                    if (options.delay && typeof options.delay == 'number') {
                        options.delay = {
                            show: options.delay,
                            hide: options.delay
                        }
                    }

                    return options
                }

                ,
            check: function(e) {
                var container = $(e.currentTarget);
                var self = container.children('img');
                var mag = container.children(".magnify-large");

                // Get the native dimensions of the image
                if (!this.nativeWidth && !this.nativeHeight) {
                    var image = new Image();
                    image.src = self.attr("src");

                    this.nativeWidth = image.width;
                    this.nativeHeight = image.height;

                } else {

                    var magnifyOffset = container.offset();
                    var mx = e.pageX - magnifyOffset.left;
                    var my = e.pageY - magnifyOffset.top;

                    if (mx < container.width() && my < container.height() && mx > 0 && my > 0) {
                        mag.fadeIn(100);
                    } else {
                        mag.fadeOut(100);
                    }

                    if (mag.is(":visible")) {
                        var rx = Math.round(mx / container.width() * this.nativeWidth - mag.width() / 2) * -1;
                        var ry = Math.round(my / container.height() * this.nativeHeight - mag.height() / 2) * -1;
                        var bgp = rx + "px " + ry + "px";

                        var px = mx - mag.width() / 2;
                        var py = my - mag.height() / 2;

                        mag.css({
                            left: px,
                            top: py,
                            backgroundPosition: bgp
                        });
                    }
                }

            }
        }

        /* MAGNIFY PLUGIN DEFINITION
         * ========================= */

        $.fn.magnify = function(option) {
            return this.each(function() {
                var $this = $(this),
                    data = $this.data('magnify'),
                    options = typeof option == 'object' && option
                if (!data) $this.data('tooltip', (data = new Magnify(this, options)))
                if (typeof option == 'string') data[option]()
            })
        }

        $.fn.magnify.Constructor = Magnify

        $.fn.magnify.defaults = {
            delay: 0
        }

        /* MAGNIFY DATA-API
         * ================ */

        $(window).on('load', function() {
            $('[data-toggle="magnify"]').each(function() {
                var $mag = $(this);
                $mag.magnify()
            })
        })

    }(window.jQuery);

    // HidingImages
    $('.in').not('#img1,#img2').hide();
    $('#imgg1').removeClass('active');
    $('#imgg1').show();
    $('#img1').addClass('active');
    // Click on images 
    $('#image1,#img2').click(function() {
       

        $('#img1').show();
        $('#img2').show();
        $('#img1').removeClass('active');
        $('#img2').addClass('active');

        $('#imgg2').show();
        $('.im').not('#imgg2').hide();


        $('#img1').click(function() {

            $('#img1').addClass('active');
            $('#img2').removeClass('active');
            $('.im').not('#imgg1').hide();
            $('#imgg1').show();
        });
        $('.in').not('#img1,#img2').hide();

    });

    $('#image2,#img3').click(function() {

        $('#img3').show();
        $('#img4').show();
        $('#img3').addClass('active');
        $('#img4').removeClass('active');
        $('.im').not('#imgg3').hide();
        $('#imgg3').show();

        $('#img4').click(function() {
            $('#img3').removeClass('active');
            $('#img4').addClass('active');
            $('#imgg4').show();
            $('.im').not('#imgg4').hide();

        });
        $('.in').not('#img3,#img4').hide();

    });
    $('#image3,#img5').click(function() {

        $('#img5').show();
        $('#img6').show();
        $('#img5').addClass('active');
        $('#img6').removeClass('active');
        $('.im').not('#imgg5').hide();
        $('#imgg5').show();

        $('#img6').click(function() {
            $('#img5').removeClass('active');
            $('#img6').addClass('active');
            $('#imgg6').show();
            $('.im').not('#imgg6').hide();

        });
        $('.in').not('#img5,#img6').hide();

    });
    $('#image4,#img7').click(function() {

        $('#img7').show();
        $('#img8').show();
        $('#img7').addClass('active');
        $('#img8').removeClass('active');
        $('.im').not('#imgg7').hide();
        $('#imgg7').show();

        $('#img8').click(function() {
            $('#img7').removeClass('active');
            $('#img8').addClass('active');

            $('#imgg8').show();
            $('.im').not('#imgg8').hide();

        });
        $('.in').not('#img7,#img8').hide();

    });

    $('#image5,#img9').click(function() {

        $('#img9').show();
        $('#img10').show();
        $('#img9').addClass('active');
        $('#img10').removeClass('active');
        $('.im').not('#imgg9').hide();
        $('#imgg9').show();

        $('#img10').click(function() {
            $('#img9').removeClass('active');
            $('#img10').addClass('active');

            $('#imgg10').show();
            $('.im').not('#imgg10').hide();

        });
        $('.in').not('#img9,#img10').hide();



    });


});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n); //Code for previous and next Slides 
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}