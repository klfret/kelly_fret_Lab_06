// alert("Lab 6 Arrays - JavaScript works!- 16 September 2014");

// Kelly L. Fret
// SDI 1409
// Lab 6 - Arrays
// 16 September 2014



// array function
var familyFunction = function() {
	
	// literal array declaration with values
	var nameArray = ["Cindy", "Rheanna", "Ness", "Darren", "Amethyst", "Daija", "Deziree", "Sugey"];
	var birthdayArray = ["May 30th", "Nov 26th", "Dec 28th", "Nov 18th", "Nov 21st", "Feb 5th", "Jul 5th", "Aug 10th"];
	
	
	for (var indexCounter = 0; indexCounter < nameArray.length; indexCounter++) {
		console.log(nameArray[indexCounter] + "'s birthday is on " + birthdayArray[indexCounter] + ".\n");
	};
	
	
	// array's reversed method
	nameArray.reverse();
	birthdayArray.reverse();
	console.log("\nReversed names: \n" + nameArray + "\n\nReversed birthdays: \n" + birthdayArray + "\n");
	
	
	// array's join method
	var theirName = nameArray.join("\n");
	var theirBirthday = birthdayArray.join("\n");
	console.log("\nJoined names:\n" + theirName + "\n\nJoined birthdays:\n" + theirBirthday);
		
	
	
};

familyFunction();

