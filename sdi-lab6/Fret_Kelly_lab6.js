// alert("Lab 6 Arrays - JavaScript works!- 16 September 2014");

// Kelly L. Fret
// SDI 1409
// Lab 6 - Arrays
// 16 September 2014



// array function
var familyFunction = function() {
	
	var nameArray = ["Cindy", "Rheanna", "Ness", "Darren", "Amethyst", "Daija", "Deziree", "Sugey"];
	var birthdayArray = ["May 30th", "Nov 26th", "Dec 28th", "Nov 18th", "Nov 21st", "Feb 5th", "Jul 5th", "Aug 10th"];
	
	for (var counter = 0; counter < nameArray.length; counter++) {
		
		console.log(nameArray[counter] + "'s birthday is on " + birthdayArray[counter] + ".\n");
		
	};
	
	
	
};


familyFunction();

