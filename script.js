let number = prompt("Enter number:");

if (number > 0 && number <= 12) {
	if (number <= 2 || number == 12) {
		alert("Winter");
	} else if
		(number <= 5) {
		alert("Spring");
	} else if
		(number <= 8) {
		alert("Summer");
	} else if
		(number <= 11) {
		alert("Autumn");
	}
} else {
	alert("Impossible. Enter number from 1 to 12");
}
