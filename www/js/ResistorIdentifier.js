	var ResistorIdentifier = function () {

    this.initialize = function() {

		
		
		var html = ''
		html = html + buildHeaderBar("Resistor Identifier", "buildMainMenu()");		// see global_utils.js
		
		// Content
		html = html + "<div>Content here</div>";

		$('#e14MainContent').html(html);
    };

	
	
    this.initialize();

}