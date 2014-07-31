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
}());
