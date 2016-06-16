
#Higher Order Functions

Higher Order Functions are functions that:
Take a function as an argument
OR
Return a function as a result

Example of a higher order function (makeAdder) that returns a function as a result:

var makeAdder = function(x) {
	return function (n) {
		return x + n;
	};
};

var addTwo = makeAdder(2);



See Brit's code for a more complicated example.

=====================================
USING forEach(), map(), etc. Higher Order Functions (HOFs) with arrays.
///////////////////////
.forEach()
///////////////////////

var normalArrayMax = function (items) {
	var max = null;
	items.forEach(function(number) {
		if (number > max) { max = number;}
	});
	return max;
};

/////////////////////
.filter()
/////////////////////
NOTE: filter() creates a new array.

An example function:

var keepEvens = function(nums) {
	var evens - [];
	nums.forEach(function(number) {
		if (number % 2 == 0) {
			evens.push(number);
		}
	})
	return evens;
};

You call filter to check a condition on every single item in an array. If the condition returns true, it will keep that item. If the condition returns false, it will throw that item away.

var filterEvens = function(nums) {
	return nums.filter(function(number) {		- if this 'return' is not present, the function will return an 'undefined'.
		return number % 2 == 0;
	});
};

var filterOdds = function (nums) {
	return nums.filter(function(number) {		- if this 'return is not present, the function will return an 'undefined'.
		return number % 2 !==0;
	});
};

var evens = filterEvens(nums);			- Use this to call it if you want to keep the results in an array.

/////////////////////////
.map()
/////////////////////////

var doubleNums = function (nums) {
	var result = [];
	nums.forEach (function(number) {
		result.push(number * number);
	});
	return result;
};

var cubedNums = function(nums) {
	var result = [];
	nums.forEach(function(number){
		result.push(number * number * number);
	});
	return result;
};

You could rewrite all your code multiple times or you could use .map()

var cubedMap = function(nums) {
		return nums.map(function(number) {
			return number*number*number;
		});
};

var cubes = cubedMap (nums);
var cubes = nums.map(function (number) {
	return number * number * number;
});


You take an input array, you say how you want to transform all the items in the array, and then it gives you a new array.

////////////////////////
.reduce()
///////////////////////

Types:
	forEach [] --> undefined
	filter [] --> new []
	map [] -->  new []
	reduce [x] --> x   - takes the whole collection of items and boils it down to a single thing.

var nums = [1, 2, 3, 4];

nums.reduce(function (a, b) {
	return a + b;				- this sums all of the numbers in the array.   Don't think of 'a' as something in the array. Think of
})									'a' as a running total. Think of 'b' as the next item to be added.


		This (essentially) happens:
			 a= null;
			 b= 1;
			 	1
			 	a=1;
			 	b=2;
			 		3
			 		a=3;
			 		b=3;
			 			6
			 			a=6;
			 			b=4;
			 				10  <-- result


var words = ["dogs", "unicorns", "puppies", "lunch"];

words.reduce(function(a, b){
	return a + b;
});
--> "dogsunicornspuppieslunch"

words.reduce(function(a, b){
	return a + " " + b;
});
--> "dogs unicorns puppies lunch"