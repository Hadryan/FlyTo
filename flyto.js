(function ($) {
  'use strict';

  $.fn.flyTo = function(to, options){
    var opts, 
        $to = to.jquery ? to : $(to),
        end = $to.offset(),
        defaults = {
          opacity: 1,
          speed: 1000,
          easing: 'swing',
          fadeOutSpeed: 150
        };

    opts = $.extend({}, defaults, options);
    
    return this.each(function(){
      var $this = $(this),
        $newFly = $this.clone(),
        start = $this.offset();

      $newFly
        .css({
          position: 'absolute', 
          left: start.left, 
          top: start.top, 
          width: $this.width(), 
          height: $this.height()
        })
        .fadeTo(0, opts.opacity)
        .appendTo('body')
        .animate({
          top: end.top - (($newFly.outerHeight() - $to.outerHeight()) / 2),
          left: end.left - (($newFly.outerWidth() - $to.outerWidth()) / 2)
        }, opts.speed, opts.easing, function(){
          $this.trigger('hide');
          $newFly.fadeTo(opts.fadeOutSpeed, 0, function(){
            $newFly.remove();
            $this.trigger('hidden');
          });
        });
    });
  };
})(jQuery);
