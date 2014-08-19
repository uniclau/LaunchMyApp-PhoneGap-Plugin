(function () {
    "use strict";
    
    function triggerOpenURL() {
        // Special case for Uniclau => Do not launch on index.html
        if(location.href.indexOf("main.html") >= 0){
          cordova.exec(
              (typeof handleOpenURL == "function" ? handleOpenURL : null),
              null,
              "LaunchMyApp",
              "checkIntent",
              []);
        }
    }

  document.addEventListener("deviceready", triggerOpenURL, false);
  
  // Special case for Uniclau => Kill the app on pause. 
  // If the app is launched while parameters are passed to it, the plugin does not work. 
  // So we exit if we are not logged in yet
  document.addEventListener("pause", function(){
    if(!localStorage.loggedIn)
      navigator.app.exitApp()
  }, false);
}());
