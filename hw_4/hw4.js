// task # 1

//function getObject(path, obj), returns object attribute's value by given path:
//var o = {a: {b: 'c'}};
//      getObject('a.b', o) // 'c'
//      getObject('a', o) // {b: 'c'}
//      getObject('d', o) // undefined
function getObject(path, o) {
  var obj = o;
  var res = eval('obj.' + path);
  return res;
}

// task # 2
// returns cloned object
//var a = {b: 'c', d: {e: 'f'}},
  //  b = deepCopy(a);
//a.d = 12;
//b.d // {e: 'f'}
function deepCopy(obj){
	if(obj == null || typeof(obj) != 'object')
        return obj;

    var newObj = {}; //obj.constructor();

    for(var key in obj)
        newObj[key] = deepCopy(obj[key]);
    return newObj;
}

/// task # 3
/// getFriends
/// returns array of friends of a user by id
/// Collection to work with:
var people = [
	{id: 1, name: 'Brad', friends: [2,5,6]},
	{id: 2, name: 'John', friends: [1, 3]},
	{id: 3, name: 'Tom', friends: [2, 5]},
	{id: 4, name: 'Fil', friends: null},
	{id: 5, name: 'John', friends: [1, 3]},
	{id: 6, name: 'Jim', friends: [1]}
];
 
var getFriends = function(userId) {
	//filter user with given Id into an array
	var filteredUsers = people.filter(function(user) { return user.id == userId; });
	var userFriends = null;
	//if user not found return null
	//if no friends found return empty array
	if (filteredUsers.length > 0) {
		var friends = filteredUsers[0].friends || [];
		userFriends = people.filter(function(user) {
			return friends.indexOf(user.id) != -1;
		})
	}
	return userFriends;
};
 
/// Example:
/// getFriends(2) // [{id: 1, name: 'Brad', friends: [2,5,6]}, {id: 3, name: 'Tom', friends: [2, 5]}]
/// getFriends(4) // []
/// getFriends(100500) // null
