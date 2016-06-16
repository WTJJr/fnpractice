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


/*
 Higher Order Function Fun
 */

var makeAdder = function (x) {
  return function (n) {
    return x + n;
  };
};

var addTwo = makeAdder(2);
console.log(addtwo(3));

// ======================
// Our first HOF - Each
// ======================

// each cares about what arguments it gets.
// data must be an array or string. callback must be a function.
var each = function (data, callback) {
  for(var index = 0; index < data.length; index++) {
    var item = data[index];
    callback(item);
  };
};

var higherArrayMax = function (items) {
  var max = null;
  var checkItem = function(item) {
    if (item > max) { max = item; }
  };
  each(items, checkItem);
  // each(items, function (item) {
  //   if (item > max) { max = item; }
  // });
  return max;
};

var normalArrayMax = function (items) {
  var max = null;
  items.forEach(function (number) {
    if (number > max) { max = number; }
  });
};


// console.log(higherArrayMax([1,2,3,4,5,6,3,2,1]));

// =====================
// Our Second HOF - filter
// =====================

var keepEvens = function (nums) {
  var evens = [];
  nums.forEach(function (number) {
    if (number % 2 == 0) {
      evens.push(number);
    }
  });
  return evens;
};

var keepOdds = function (nums) {
  var odds = [];
  nums.forEach(function (number) {
    if (number % 2 != 0) {
      odds.push(number);
    }
  });
  return odds;
};

var filterEvens = function (nums) {
  return nums.filter(function (number) {
    return number % 2 == 0;
  });
};

var filterOdds = function (nums) {
  return nums.filter(function (number) {
    return number % 2 != 0;
  });
};

var nums = [1,2,3,4];
var evens = filterEvens(nums);

var foo = function () {
  var number = Math.floor(Math.random() * 100);
  console.log(number);
};

// -------------
// THE THIRD HOF
// -------------

var doubleNums = function (nums) {
  var result = [];
  nums.forEach(function (number) {
    result.push(number * 2);
  });
  return result;
};

var cubedNums = function (nums) {
  var result = [];
  nums.forEach(function (number) {
    result.push(number * number * number);
  });
  return result;
};

var cubedMap = function (nums) {
  return nums.map(function (number) {
    return number * number * number;
  });
};

var cubes = cubedMap(nums);
var cubes = nums.map(function (number) {
  return number * number * number;
});


// The FINAL HOF - reduce
// ----------------------


// ---------------------------
// 1. Find largest number
// ---------------------------

var arrayMax = function (items) {
  var max = null;
  for(var index = 0; index < items.length; index++) {
    if (items[index] > max) { max = items[index]; }
  };
  return max;
};

// ---------------------------
// 2. Find longest string
// ---------------------------




// ---------------------------
// 3. Find even numbers
// ---------------------------



// ---------------------------
// 4. Find odd numbers
// ---------------------------


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