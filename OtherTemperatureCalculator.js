function calculateTemperatureFromFarenheit() {
	var farenheit = document.getElementById("farenheit").value;

	var celsius = Math.ceil(((farenheit - 32) * 5) / 9);
	var kelvin = celsius + 273.15;

	var celsiusStatement;
	var kelvinStatement;

	if (farenheit == 1) {
		celsiusStatement =
			farenheit + " degree Farenheit is " + celsius + " degrees Celsius";

		kelvinStatement = farenheit + " degree Farenheit is " + kelvin + " Kelvin";
	} else {
		if (celsius == 1) {
			celsiusStatement =
				farenheit + " degrees Farenheit is " + celsius + " degree Celsius";
		} else {
			celsiusStatement =
				farenheit + " degrees Farenheit is " + celsius + " degrees Celsius";
		}

		kelvinStatement =
			farenheit + " degrees Farenheit is " + kelvin + " Kelvin ";

		document.getElementById("celsius").innerHTML = celsiusStatement;
		document.getElementById("kelvin").innerHTML = kelvinStatement;
	}
}
