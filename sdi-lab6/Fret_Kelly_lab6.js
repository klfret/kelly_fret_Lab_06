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
	console.log("Initial array values.\n");
	console.log(nameArray);
	console.log(birthdayArray);
	console.log("\n");
		
	
	// array name and birthday output
	for (var indexCounter = 0; indexCounter < nameArray.length; indexCounter++) {
		console.log(nameArray[indexCounter] + "'s birthday is on " + birthdayArray[indexCounter] + ".");
		
	};
	
	
	// array's reversed method
	nameArray.reverse();
	birthdayArray.reverse();
	console.log("\n");
	console.log("\nReversed names:\n");
	console.log(nameArray);
	console.log("\nReversed birthdays:\n");
	console.log(birthdayArray);
	console.log("\n");
	
	
	// array's shift method to remove the first array element
	var removedName = nameArray.shift();
	var removedBday = birthdayArray.shift();
	console.log(removedName + "'s name and " + removedBday + " birthday was removed.\n");
	console.log("\n");
	
	
	// array's join method to join the array elements as a string
	var theirName = nameArray.join("\n");
	var theirBirthday = birthdayArray.join("\n");
	console.log("\nJoined names after " + removedName + "'s name was removed.\n" + theirName + "\n");
	console.log("\nJoined birthdays after " + removedBday + " birthday was removed.\n" + theirBirthday + "\n");
		
	
	
};

familyFunction();

