(function ($, Drupal) {
  Drupal.behaviors.changeMembersToSubscribers = {
    attach: function (context, settings) {
		$("body.path-group div#block-crt-lalg-local-tasks ul li").filter(function() {
			return $(this).find('a').text().trim().toLowerCase() === 'members';
		}).find('a').text('Subscribers');   

		let tableheading = $("body.path-group div#block-crt-lalg-page-title h1");
		let tableheadingtext = tableheading.text();
		let newtext = tableheadingtext.replace(/(.*)(\bmembers\b)([^]*?)$/, function(match, before, target, after) {
			return before + 'subscribers';
		});
		tableheading.text(newtext);	
		
		$("body.path-group div#block-crt-lalg-local-actions a").each(function(index, value) {
			if ($(this).text() == "Add member") {
				$(this).text("Add subscriber");
			};
		});
		
    }
  }
})(jQuery, Drupal);

