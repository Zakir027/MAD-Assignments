
//........PROBLEM 1..........//
function sandwich_calculator(bread, cheese){
    if(bread/2>cheese) return cheese;
        return bread/2;
}
console.log( sandwich_calculator(3 ,7));


//........PROBLEM 2..........//
function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));



//........PROBLEM 3..........//
var student =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };
  console.log(student);
  delete student.rollno;
  console.log(student);

  