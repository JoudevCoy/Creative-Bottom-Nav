(function($){
  "use strict";
  
  $(".plus-action").click(function(){
    $(".plus-action").attr("data-active", "true");
  });
  
  $(".close-action").click(function(){
    $(".plus-action").attr("data-active", "false");
  });
})(jQuery)