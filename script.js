//your JS code here. If required.
function getBrowserInfo() {
      var browserInfoElement = document.getElementById('browser-info');
      var browserName = navigator.appName;
      var version = navigator.appVersion;

      browserInfoElement.textContent = 'You are using ' + browserName + ' version ' + version;
    }

    // Call the getBrowserInfo function when the page loads
    window.addEventListener('load', getBrowserInfo);