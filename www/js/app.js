/*
 * This function is called when index.html has been loaded - equivilent of JQuery document.ready()
 */
(function () {

	/* Override handling for window alert */
    document.addEventListener('deviceready', function () {
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);


	
	buildMainMenu(); // see main_menu.js
}());