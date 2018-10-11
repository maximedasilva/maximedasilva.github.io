  var velocity = 1;
function update(){
    var pos = $(window).scrollTop();
        var $element = $('.container');
        // subtract some from the height b/c of the padding
        var height = $element.height();
        $('.container').css('backgroundPosition','50% '+(70+Math.round((pos/400) * 100) + '%'));

        $('.separator').css('backgroundPosition','50% '+(Math.round((pos/1500) * 100) + '%'));

    };
$(window).bind('scroll', update);
