// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Things to checK:
//Number
//String
//Null
//Undefined
//Boolean
//Array
//Obj
//Function

var stringifyJSON = function(obj) {
	var outcome = [];
	if (typeof obj === 'number' || typeof obj === 'boolean'){
		return obj.toString();
	}
	if (typeof obj === 'string'){
		return '"' + obj + '"';
	}
	if (obj === null){
		return "null";
	} 
	if (obj === undefined){
		return "undefined";
	}
	if (Array.isArray(obj)){
		obj = obj.map(function(input){ return stringifyJSON(input);})
		//change each input to string (multiple individual strings)
		return "[" + obj.join() + "]"; 
		//then join into one whole string
	}
	for (var key in obj){
		if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function'){
			outcome.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
		}
	}			
	return '{' + outcome.join() + '}';
};