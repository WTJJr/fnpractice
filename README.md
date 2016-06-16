Notes on HW review
EXERCISES-1.JS

Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

var getLength = function(string) {
	return string.length;
};

OR - you can index into the string by using string[x]

var myLength = function(string) {
		var count=0;
		while (string[count] !== undefined) {
			count++;
	}
	return count;
};

	TAKEAWAYS
	1. THERE'S A THING I CAN USE CALLED 'WHILE' THAT WILL KEEP LOOPING AS LONG AS SOMETHING IS 'TRUE'.
	2. YOU CAN INDEX INTO A STRING BY POSITION BY USING string[x], where x is the position number.
	3. I CAN SOLVE PROBLEMS WITHOUT USING BUILT-IN TOOLS BY LOOKING FOR KEY PIECES OF INFORMATION (e.g. if I run
		off the end of the string, I get 'undefined'.)


Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var greaterThan = function(x, y) {
	if (y > x) {
		return true;
	} else {
		return false;
	}
};

OR

function evenGreaterThan(x, y) {
	return y>x;
};

EXERCISES-2.JS

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

var maxOfThree = function (x, y, z){
	var max= null;
	if (x> max) {max = x;}
	if (y > max) {max = y;}
	if (z > max) {max = z;}
	return max;
	};

var alternateMaxThree = function (x, y, z) {
	if (x > y && x > z) {
		return x;
		} else if (y > x && y > z) {
		return y;
		} else {
			return z;
	}
};

var rodneyMaxThree = function (x, y, z) {
	var items = [x, y, z];
	var max = null;
	for (var index = 0; index < items.length; index++) {
		if (items[index] > max) { max = items[index];}
	};
	return max;
};

Math.max(x, y, z) - Math.max is a 'Variable arity' function.

Variable arity function - "arity" is how many arguments a function takes. "This function is arity 2. This function is arity 5."

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

See Brit's code.

Anytime you have a conditional and you get beyond three branches, you should start to get worried.

A note about || and &&  - or is ||, and is &&, and both are short circuiting (i.e. they stop as soon as they can).

THERE IS A MORE DIRECT WAY TO LOOK FOR THIS DATA
var bestIsVowel = function (char) {
	var vowels = ["a", "e", "i", "o", "u"];
	return vowels.includes(char);     <-- this returns true or false.
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

See Brit's code.

