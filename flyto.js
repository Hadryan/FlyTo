(function ($) {
  $.fn.flyTo = function(to, options) {
    var $this = this,
    $to = $(to),
    defaults = {
      opacity: 250,
      speed: 1000,
      fadeOutSpeed: 150
    };

    var opts = $.extend({}, defaults, options);


    var start = $this.offset();
    var newFly = $this.clone().css({position: 'fixed', left: start.left, top: start.top, width: $this.width(), height: $this.height()}).fadeTo(0, opts.opacity).appendTo('body');
    var end = $to.offset();
    
    newFly.animate({
      top: (end.top - $(window).scrollTop()),
      left: end.left
    }, opts.speed, function(){
      $this.trigger('hide')
      newFly.fadeTo(opts.fadeOutSpeed,0, function(){
        newFly.remove();
        $this.trigger('hidden')
      });
    });

    return $this;
  };
})(jQuery);
