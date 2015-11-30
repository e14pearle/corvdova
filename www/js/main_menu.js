
/**
 * Build and inject the html for the main menu.
 * Static values (e.g. styles are defined in e14_static.js, which is defined in the calling page (see index.html)
 **/
function buildMainMenu() {
	
	var html = '';
	
	html = html + '<div id="e14header"><img src="assets/pics/img_banner_header_e14.png" /></div>';
	
	html = html + '<div class="menu_option">This is a menu option</div>';
	
	// start table
	html = html + '<div>'
	html = html + '<table style="background:' + appStyle.tblMenuColour + '; border:none" width="320px" cellspacing="0" cellpadding="0">';
	
	// menu options
	html = html + buildMenuOption("assets/pics/icon_search_blue.png", "Product Search", 1);
	html = html + buildMenuOption("assets/pics/icon_partslist.png", "Parts List", 2);
	html = html + buildMenuOption("assets/pics/icon_clock.png", "Recent Discussions", 3);
	html = html + buildMenuOption("assets/pics/icon_chat.png", "Popular Discussions", 4);
	html = html + buildMenuOption("assets/pics/icon_tbhs.png", "The Ben Heck Show", 5);
	html = html + buildMenuOption("assets/pics/icon_rpi.png", "Raspberry Pi", 6);
	html = html + buildMenuOption("assets/pics/icon_video.png", "Videos", 7);
	html = html + buildMenuOption("assets/pics/icon_converter.png", "Unit Converter", 8);
	html = html + buildMenuOption("assets/pics/icon_resistor.png", "Resistor Identifier", 9);
	html = html + buildMenuOption("assets/pics/icon_twitter.png", "Element 14 Twitter", 10);
	html = html + buildMenuOption("assets/pics/icon_search_blue.png", "Search Discussions", 11);
	html = html + buildMenuOption("assets/pics/icon_ekg.png", "Status Updates", 12);
	html = html + buildMenuOption("assets/pics/icon_phone.png", "Call Us", 13);
	html = html + buildMenuOption("assets/pics/icon_help.png", "Help / About", 14);
	html = html + buildMenuOption("assets/pics/icon_settings.png", "Settings", 15);
		
	// Finish off the table
	html = html + '</table>';
	html = html + '</div>';
	
	$('#e14MainContent').html(html);
}

/*
 * Build an individual menu option. Note styling defined in static values in e14_statics.js
 */
function buildMenuOption(icon,  text, optionId) {

	var html = '';
	
	var onClick = "loadPage('" + optionId + "');";
	
	html = html + '<tr style="background:' + appStyle.tblBGColour + '; height:' + appStyle.tblRowHeight + 'px; ">';
		html = html + '<td style="padding:5px; width:30px;  border-bottom: solid 1px #848589;"><img src = "' + icon + '" /></td>';
		html = html + '<td style="padding:5px;  border-bottom: solid 1px #848589;" onclick="' + onClick + '"><span style="font-Size:' + appStyle.tblFont.fontSize + 'px; font-Weight:' + appStyle.tblFont.fontWeight + '; color:#848589">' + text + '</span></td>';
	html = html + '</tr>';
	
	return html;
}

/**
 * Load pages depedning on the function. Each page's logic is contained within a separate js file (see definitiions in index.html)
 **/
function loadPage(page) {

	if(page === '1') {
		var service = new ProductSearch();
	}
	else if(page === '2') {
		var service = new PartsList();
	}
	else if(page === '3') {
		var service = new RecentDiscussions();
	}
	else if(page === '4') {
		var service = new PopularDiscussions();
	}
	else if(page === '5') {
		var service = new BenHeckShow();
	}
	else if(page === '6') {
		var service = new RaspberryPi();
	}
	else if(page === '7') {
		var service = new Videos();
	}
	else if(page === '8') {
		var service = new UnitConverter();
	}
	else if(page === '9') {
		var service = new ResistorIdentifier();
	}
	else if(page === '10') {
		var service = new E14Twitter();
	}
	else if(page === '11') {
		var service = new SearchDiscussions();
	}
	else if(page === '12') {
		var service = new StatusUpdates();
	}
	else if(page === '13') {
		var service = new CallUs();
	}
	else if(page === '14') {
		var service = new HelpAbout();
	}
	else if(page === '15') {
		var service = new Settings();
	}
	else {
		alert("Load Page " + page);
	}
}

