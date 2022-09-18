(function($, Drupal) {

let dom_name = window.location.hostname.split('.')[0];
if (dom_name) {
  $('body').addClass(dom_name);
}  

})(jQuery, Drupal);
