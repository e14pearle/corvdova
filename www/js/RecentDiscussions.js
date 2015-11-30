var RecentDiscussions = function () {

    this.initialize = function() {

		
		
		var html = ''
		html = html + buildHeaderBar("Recent Discussions", "buildMainMenu()");		// see global_utils.js
		
		// Content
		html = html + "<div>Content here</div>";

		$('#e14MainContent').html(html);
    };

	
	
    this.initialize();

}