// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var classNameMatch = [];
	var findClassNameMatch = function (element){
		if (element.classList && element.classList.contains(className)){
			classNameMatch.push(element);
		}
		for (var i = 0; i < element.childNodes.length; i++){
			findClassNameMatch(element.childNodes[i]);
		}	
	}
	findClassNameMatch(document.body);
	return classNameMatch;
}	