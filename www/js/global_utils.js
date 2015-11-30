/*
 * Generic function to build a header bar
 *
 * returnFunction is the string value for the back button onClick() event
 
 */
function buildHeaderBar(title, returnFunction) {

	var style = "width:320px; background:" + appStyle.barColour + "; height:" + appStyle.headerHeight + 'px;';
	var html = '<div style="' + style + '">';
	
	// Back option returns to supplied function
	html = html + '<span style="color:#FFFFFF; height:30px;  display:table-cell; vertical-align:middle; padding-left:10px" onclick="' + returnFunction + ';">Back</span>';
	
	html = html + '<span style="color:#FFFFFF; height:30px;  display:table-cell; vertical-align:middle; padding-left:20px" font-Size:' + appStyle.headerFont.fontSize + 'px; font-Weight:' + appStyle.headerFont.fontWeight + '">' + title + '</span>';
	html = html + "</div>";
	
	return html;
}

