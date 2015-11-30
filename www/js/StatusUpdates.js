var StatusUpdates = function () {

    this.initialize = function() {

		
		
		var html = ''
		html = html + buildHeaderBar("Status Updates", "buildMainMenu()");		// see global_utils.js
		
		// Content
		html = html + "<div>Content here</div>";

		$('#e14MainContent').html(html);
    };

	
	
    this.initialize();

}