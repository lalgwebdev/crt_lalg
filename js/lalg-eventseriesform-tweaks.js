(function ($, Drupal) {
  Drupal.behaviors.changeMembersToSubscribers = {
    attach: function (context, settings) {
		$("form.eventseries-lalg-event-add-form label").filter(function() {
			return $(this).text() == "Text format";
		}).css("font-weight", "normal");
		
		$("div.field--name-recur-type").css("margin-top", "50px");
		
		$("div.field--name-recur-type fieldset legend span").text("Choose Your Event Type");
    }
  }
})(jQuery, Drupal);

