// task 3 - Person extended
var shallowCopyWithProperties = function (obj){
	var newObj = {};
	for(var key in obj) {
		(function(key) {
			if (typeof(obj[key]) == 'function') {
				newObj[key] = function() { return obj[key](); };
			} else {
				var capKey = key.toString().substring(0, 1).toUpperCase() + key.toString().substring(1);
				(function(prop) {
					newObj['get' + capKey] = function() { return prop; }
				})(obj[key]);
				newObj['set' + capKey] = function(_newValue) {
					newObj['get' + capKey] = function() { return _newValue; };
				}
			}
		}) (key)
	}
	return newObj;
}

var PersonExtended = function(args){
	return shallowCopyWithProperties(args);
};

/*
var p = new PersonExtended({
   name: 'Jack', 
   age: '10',
   jump: function(){ return "My name is " + this.name + " and I can jump.";}
});
p.getName() // 'Jack'
p.name // undefined
p.getAge() // 10
p.age // undefined
console.log(p.jump()) // "My name is Jack and I can jump.""
console.log(p.getJump) // undefined
*/