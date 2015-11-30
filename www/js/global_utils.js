/*
 * Generic function to build a header bar
 *
 * returnFunction is the string value for the back button onClick() event
 
 */
function buildHeaderBar(title, returnFunction) {

	//var style = "width:320px; background:" + appStyle.barColour + "; height:" + appStyle.headerHeight + 'px;';
	var html = '<div class="header_bar">';
	html = html + '<span>' + title + '</span>';
	html = html + "</div>";
	
	return html;
}

