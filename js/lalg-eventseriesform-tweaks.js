(function ($, Drupal) {
  Drupal.behaviors.changeMembersToSubscribers = {
    attach: function (context, settings) {
		$("form.eventseries-lalg-event-add-form label").filter(function() {
			return $(this).text() == "Text format";
		}).css("font-weight", "normal");
		
		$("div.field--name-recur-type").css("margin-top", "50px");
		
		$("div.field--name-recur-type fieldset legend span").text("Choose Your Event Type");
		$("div.field--name-recur-type label[for='edit-recur-type-daily-recurring-date']").text("Single or Daily Event");
		
		let pagetitleblock = $("form.eventseries-lalg-event-edit-form").parents(".region-content").find(".lalg-page-title-block h1");
		let em2 = pagetitleblock.find("em:nth-child(2)").text()
		let newtext="<h1>Edit Event Series " + em2 + "</h1>" + "<span class=usewithcaution> Use with caution - this will delete and recreate all existing event instances </span>";
		if (!$("span.usewithcaution").length) {
			pagetitleblock.replaceWith(newtext);
		}
		
		$("form.eventseries-lalg-event-edit-form").parents(".region-content").find(".lalg-event-series-text-block h2").hide();
		
		let addeventseriestitle = $(".add_group_event_series_\\(lalg_event\\) .lalg-page-title-block h1");
		addeventseriestitle.replaceWith("<h1> Add an Event Series</h1>");
					
		/* event series display */
		$("div.lalg-eventseries-display div").filter(function() {
			return $(this).text() === "Series Title";
		}).addClass("lalg-eventseries-display-heading-title");
		$("div.lalg-eventseries-display div").filter(function() {
			return $(this).text() === "Series Description";
		}).addClass("lalg-eventseries-display-heading-description");
		$("div.lalg-eventseries-display div").filter(function() {
			return $(this).text() === "Series Contact Details";
		}).addClass("lalg-eventseries-display-heading-contact-details");
		$("div.lalg-eventseries-display div").filter(function() {
			return $(this).text() === "Event Instances";
		}).addClass("lalg-eventseries-display-heading-event-instances");
		$("div.lalg-eventseries-display div").filter(function() {
			return $(this).text() === "Recur Type";
		}).addClass("lalg-eventseries-display-heading-recur-type");

		/* event instance display */
		$("div.lalg-eventinstance-display div").filter(function() {
			return $(this).text() === "Booking Details";
		}).addClass("lalg-eventinstance-display-booking-details");
		$("div.lalg-eventinstance-display div").filter(function() {
			return $(this).text() === "Contact Details";
		}).addClass("lalg-eventinstance-display-contact-details");
		$("div.lalg-eventinstance-display").find("time:first").addClass("lalg-eventinstance-display-time");
		$("div.lalg-eventinstance-display").find("time:first").parent().addClass("lalg-eventinstance-display-time-div");

		if (!$("span.lalg-eventinstance-display-time-heading").length) {
			$("<span class='lalg-eventinstance-display-time-heading'>Date & Time</span>").insertBefore("time.lalg-eventinstance-display-time");
		}
		
		$("div#block-crt-lalg-local-tasks ul li").filter(function() {
			return $(this).text() === "Clone";
		}).addClass("lalg-clone");
		
    }
  }
})(jQuery, Drupal);

