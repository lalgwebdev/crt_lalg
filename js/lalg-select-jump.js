(function ($, Drupal) {
  Drupal.behaviors.articleJump = {
    attach: function attach(context) {
      once('articleJump', 'select[name="articles"]', context).forEach(function(value) {
        $('select[name="articles"]').change(function () {
          var t=$(this).val();
          if(t != "") {
            window.location.href = t;
          }
        });
      });                                                           
    }
  }
})(jQuery, Drupal);
