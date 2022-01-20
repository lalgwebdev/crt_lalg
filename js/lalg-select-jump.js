(function ($) {
  $("#lalg-article-jump").change(function () {
      var t=$("#edit-jump").val();
      if(t != "") {
        window.location.href = t;
      }
  });  
})(jQuery);
