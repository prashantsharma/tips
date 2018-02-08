//Closures JavaScript

//Example 1
function parentFunc() {
  var a = 4;
  function childFunc() {
    return a * a;
  }
  return childFunc();
}
console.log(parentFunc());

//Example 1
var xyz = function () {
	var a = 5;
	return { 
  abc : function(){
  	return a*a;
  }
  }
}()
console.log(xyz.abc());
