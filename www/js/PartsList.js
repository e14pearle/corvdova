var PartsList = function () {

    this.initialize = function() {

		
		
		var html = ''
		html = html + buildHeaderBar("Parts List", "buildMainMenu()");		// see global_utils.js
		
		// Content
		html = html + "<div>Content here</div>";

		$('#e14MainContent').html(html);
    };

	
	
    this.initialize();

}