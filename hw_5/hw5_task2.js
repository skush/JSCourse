// task 2 - Person
var shallowCopy = function shallowCopy(obj){
    var newObj = {}; //obj.constructor();
    for(var key in obj)
        newObj[key] = obj[key];
    return newObj;
}

var Person = function(obj){
	return shallowCopy(obj);
};

/*
var p = new Person({
   name: 'Jack', 
   age: '10',
   jump: function(){ return "My name is " + this.name + " and I can jump.";}
});
p.name // 'Jack'
p.age // 10
console.log(p.jump()) // "My name is Jack and I can jump."
*/