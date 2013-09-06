## FlyTo
#### A super lightweight library for flying elements from one point to another

I created this repo quicky to add a super simplistic, yet reusable library that allow you to specify a targeted element and a ending element for it to *FlyTo*.

### Usage
Simple call `FlyTo(target, options)` on the object you want to move passing in the target (*where you want it to land*) and options if you so choose.

`options` is a JavaScript object which *extends* the defaults object below.
```
defaults = {
  opacity: 250,
  speed: 1000,
  fadeOutSpeed: 150
}
```

Example:
```
jQuery(document).ready(function($){
  $('#add-to-cart').click(function(e){
    e.preventDefault();
    $('.product-image img').flyTo('#cart', { opacity: 400 });
  });
});
```

### Future
I plan on adding in some features later on if it gets used. Please feel free to add a issue if you find something wrong or a pull request if you're feeling helpful.
