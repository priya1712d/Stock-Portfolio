let obj1 = {
    name : "priya",
    Name: "bade priya",
    age: "20"
}
let obj2 = Object.create(obj1);

obj1.newCol = "newCo";
console.log("Object1" + obj1.name + " age " + obj1.age + " col " + obj1.newCol + "Name" + obj1.Name);
console.log("Object2" + obj2.name + " age " + obj2.age + " col " + obj2.newCol);

var unValue;

if(unValue === undefined ){
    console.log("is undefined");
} else {
    console.log('not undefined');
}
