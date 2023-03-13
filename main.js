//1 local scope
function add(){
    var a=20;
    console.log(a)
}
add()

//global
var glo=30;
function glob(){
    console.log(glo)
}
glob()
//block
{
    let abc=100;
    console.log(abc)
}
//scope chain
var x=24;
function OuterFunction()
{
console.log(x)
}
OuterFunction();
//2settimeout
setTimeout(()=>{
    console.log("nithin")
},6000)

//4.object
let obj={
    name:"pavan",
    age:23
}
console.log(obj)

//function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  const person1 = new Person('John', 30);
  const person2 = new Person('Jane', 25);

  person1.sayHello(); // logs "Hello, my name is John and I am 30 years old."
  person2.sayHello(); // logs "Hello, my name is Jane and I am 25 years old."

  //prototype
  function person11(){
    this.name='nithin',
    this.age=23
}
const person12=new person11()
console.log(person12)
//7
let fruits=["apple","banana"]
console.log(Array.prototype)
//8
function child(name, age){
    this.name = name;
    this.age = age;
};
function description(name, age, id, cls,gender){
    child.call(this, name, age, id, cls,gender);
    this.id = id;
    this.cls=cls;
    this.gender = gender;
};
let student1 = new child('Nithin', 135);
let student2 = new description('pavan', 118, 143, 'Btech');
console.log(student1);
console.log(student2);
//10
(function ()
{
var message = "IIFE";
console.log(message);
//IIFE
}
)();
