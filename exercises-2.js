// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x>=y) {
    	return x;
    } else {
    	return y;
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if (x >= y >= z) {
    	return x;
    } else {
    	if (y>=z) {
    		return y;
    	} else {
    		return z;
    	}
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char == "a" || char=="e" || char=="i" || char=="o" || char=="u") {
    	return true;
    } else {
    	return false;
    }
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var phArray = [];
    function isVowelorPunct(char){
    if (char == "a" || char=="e" || char=="i" || char=="o" || char=="u" || char==" " || char=="." || char == "A" || char=="E" || char=="I" || char=="O" || char=="U" ) {
    	return true;
    	} else {
    		return false;
    	}
	};
    for (var x = 0 ; x < phrase.length ; x++) {
    	if (!(isVowelorPunct(phrase.charAt(x)) == true)) {
    		phArray.push(phrase.charAt(x) +"o"+ phrase.charAt(x));
    	} else {
    		phArray.push(phrase.charAt(x));
    	} 
    }
    var totalphrase = phArray.join("");
    return totalphrase;
};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    for (var x=string.length-1; x>=0; x--) {
    	
    }
}