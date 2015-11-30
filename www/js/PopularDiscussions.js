var PopularDiscussions = function () {

    this.initialize = function() {

		
		
		var html = ''
		html = html + buildHeaderBar("Popular Discussions", "buildMainMenu()");		// see global_utils.js
		
		// Content
		html = html + "<div>Content here</div>";

		$('#e14MainContent').html(html);
	
		getData();
		
    };

	
	
    this.initialize();
	
	
	
	
	/*
	* THIS IS JHUST A DUMMY CALL TO SEE IF IT WORKS OL IN ANDROID
	*/
	function getData() {
	
		var URI = "http://www.element14.com/community/community/feeds/threads";
	
		var request = $.ajax({  
			url: URI,
			dataType: "json", 
			type: "GET",
			processData: false, 
			async: false,	
		}); 

		request.done(function(data) {
			alert(data);
		});
		
		// If request fails alert an error to the user
		request.fail(function(jqxhr) {
			console.log(jqxhr.statusText);
			alert(jqxhr.statusText);
		});
		
			
	};

}