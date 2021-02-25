document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=abcbe3c9630266bd918577194a0d4318";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += "<hr style='height: 2px; color: gray; background-color: gray'><h2>Weather in " + json.name;
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '</h2>';
      results += '<h3>Description: ';
      for (let i=0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
          results += ", "
      }
      results += '</h3>';
      results += '<div class="row">';
      results += '<p class="column">Temperature: ' + json.main.temp + ' &deg;F<br>';
      results += 'Feels like: ' + json.main.feels_like + ' &deg;F</p>';
      results += '<p class="column">Min: ' + json.main.temp_min + ' &deg;F<br>';
      results += 'Max: ' + json.main.temp_max + ' &deg;F</p>';
      results += '</div>';
      document.getElementById("weatherResults").innerHTML = results;
    });

  const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=abcbe3c9630266bd918577194a0d4318";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
        if (i == 0) {
	  forecast += "<hr style='height: 2px; color: gray; background-color: gray'><h2>" + moment(json.list[i].dt_txt).format('MMMM DD, YYYY') + "</h2>";
	} else if (moment(json.list[i].dt_txt).format('ha') == "12am") {
          forecast += "<hr style='height: 2px; color: gray; background-color: gray'><h2>" + moment(json.list[i].dt_txt).format('MMMM DD, YYYY') + "</h2>";
        }
        forecast += "<hr style='width: 95%'><div><h3>" + moment(json.list[i].dt_txt).format('ha') + '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>' + '</h3></div>';
        forecast += '<div class="row">';
        forecast += '<p class="column">Temperature: ' + json.list[i].main.temp + ' &deg;F<br>';
        forecast += 'Feels like: ' + json.list[i].main.feels_like + ' &deg;F</p>';
        forecast += '<p class="column">Min: ' + json.list[i].main.temp_min + ' &deg;F<br>';
        forecast += 'Max: ' + json.list[i].main.temp_max + ' &deg;F</p>';
        forecast += '</div><br>';
      }
      document.getElementById("forecastResults").innerHTML = forecast;
    });

});
