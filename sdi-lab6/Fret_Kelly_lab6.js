// alert("Lab 6 Arrays - JavaScript works!- 16 September 2014");

// Kelly L. Fret
// SDI 1409
// Lab 6 - Arrays
// 16 September 2014



// array function
var familyFunction = function() {
	
	// literal array declaration with values
	var nameArray = ["Cindy", "Rheanna", "Ness", "Darren", "Amethyst", "Daija", "Deziree", "Sugey"];
	var birthdayArray = ["May 30", "Nov 26", "Dec 28", "Nov 18", "Nov 21", "Feb 5", "Jul 5", "Aug 10"];
	console.log("Initial name and birthday arrays' values:\n");
	console.log(nameArray);
	console.log(birthdayArray);
	console.log("\n");
		
	
	// array name and birthday output
	console.log("Name array and birthday array displayed together:\n");
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
	console.log("Shifted name array:\n");
	console.log(nameArray);
	console.log("Shifted birthday array:\n");
	console.log(birthdayArray);
	console.log(removedName + "'s name and " + removedBday + " birthday were removed from the top of their list.\n");
	console.log("\n");
	
	
	// array's join method to join the array elements as a string
	var theirName = nameArray.join("\n");
	var theirBirthday = birthdayArray.join("\n");
	console.log("\nJoined name array: \n" + theirName + "\n");
	console.log("\nJoined birthday array: \n" + theirBirthday + "\n");
		
	return;
	
};

familyFunction();

