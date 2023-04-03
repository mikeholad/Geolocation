function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    var heading = position.coords.heading;
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Latitude: " + latitude + "<br>" +
                               "Longitude: " + longitude + "<br>" +
                               "Accuracy: " + accuracy + "<br>" +
                               "Altitude: " + altitude + "<br>" +
                               "Speed: " + speed + "<br>" +
                               "Heading: " + heading;
  }
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      var resultElement = document.getElementById("result");
      resultElement.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  