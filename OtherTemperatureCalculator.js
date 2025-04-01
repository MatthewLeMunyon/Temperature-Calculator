function calculateTemperatureFromFarenheit() {
	var farenheit = document.getElementById("farenheit").value;

	var celsius = Math.ceil(((farenheit - 32) * 5) / 9);
	var kelvin = celsius + 273.15;

	if (farenheit == 1) {
		console.log(
			farenheit + " degree Farenheit is " + celsius + " degrees Celsius"
		);
		console.log(farenheit + " degree Farenheit is " + kelvin + " Kelvin ");
	} else {
		if (celsius == 1) {
			console.log(
				farenheit + " degrees Farenheit is " + celsius + " degree Celsius"
			);
		} else {
			console.log(
				farenheit + " degrees Farenheit is " + celsius + " degrees Celsius"
			);
		}

		console.log(farenheit + " degrees Farenheit is " + kelvin + " Kelvin ");
	}
}
