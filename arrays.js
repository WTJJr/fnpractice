// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
// var findLargestNum = function (array) {    - my old code
// 	var largestNumArray = array.slice();
// 	for (var x = 0; x < array.length-1; x++) {
// 		if (largestNumArray[x] >= largestNumArray[(x+1)]) {
// 			 largestNumArray[(x+1)] = largestNumArray[x];
// 		} else {
// 			 largestNumArray[x]=largestNumArray[(x+1)];
// 		}
// 	}
// 	return largestNumArray[(largestNumArray.length-1)];
//} 

// Code with Brit's help:

var findLargestNum = function(array) {
	var largest = 0;
	for(var x = 0; x < array.length - 1; x++) {
		var number = array[x];
		if (number > largest) {
			largest = number;
		}
	}
	return largest;
};

findLargestNum(numbers);

/// ---------------
/// 1b. "Destutter" an array.
/* Write a function destutter(items) that takes an array of items and remove *sequential* duplicates but not all duplicates from the array. */
/* For example, destutter([1,2,3,3,4,4,5,5,2,1,2,2]) would return [1,2,3,4,5,2,1,2] */
/// ----------------


// ---------------------------
// 2. Find longest string
// ---------------------------
var longestString = function (string) {
	var longest = "";
	for (var x=0; x<string.length; x++) {
		if (string[x].length > longest.length) {
			longest = string[x];
		}
	}
	return longest;
};

longestString(strings);

// ---------------------------
// 3. Find even numbers
// ---------------------------

var isEven = function (array) {
	var evens = [];
	for (var x=0; x<array.length ; x++) {
		if (array[x] % 2 == 0) {
			evens.push(array[x]);
		}
	}
	var evenNumbers = evens.join(separator = ',');
	return evenNumbers;
};

isEven(numbers);

// ---------------------------
// 4. Find odd numbers
// ---------------------------
var isOdd = function (array) {
	var odds = [];
	for (var x=0; x<array.length ; x++) {
		if (array[x] % 2 !== 0) {
			odds.push(array[x]);
		}
	}
	var oddNumbers = odds.join(separator = ',');
	return oddNumbers;
};

isOdd(numbers);

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------