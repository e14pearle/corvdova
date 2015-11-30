var BenHeckShow = function () {

    this.initialize = function() {

		
		
		var html = ''
		html = html + buildHeaderBar("The Ben Heck Show", "buildMainMenu()");		// see global_utils.js
		
		// Content
		html = html + "<div>Content here</div>";

		$('#e14MainContent').html(html);
    };

	
	
    this.initialize();

}