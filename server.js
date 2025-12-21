// // "use strict"; 
// // // //  variable 
// // // //  store data in memory
// // // //  can be changed
// // // // let var const 
// // // const pi=3.14;
// // // // Scope of variable
// // // // 1. Global Scope
// // // // 2. Function Scope
// // // // 3. Block Scope

// // // // Global Scope
// // // let a=10;
// // // function show(){
// // //     console.log(a);
// // //     let b=20;
// // //     console.log(b);
// // // }
// // // show();
// // // console.log(a);
// // // // console.log(b); // error
// // // // Function Scope
// // // function test(){
// // //     let c=30;
// // //     console.log(c);
// // // }
// // // test();
// // // // console.log(c); // error

// // // // Block Scope
// // // if(true){
// // //     let d=40;
// // //     console.log(d);
// // // }
// // // // console.log(d); // error

// // // console.log(d) // hoisting
// // // var d=50;
// // // console.log(d)
// // // var d=60;
// // // console.log(d)
// // // let e=70;
// // // // let e=80; // error
// // // let f=90; // error
// // // if (true){
// // //     let f=100;
// // //     console.log(f)
// // // }
// // // console.log(f)
// // // let amount=110;
// // // if (true){
// // //     let amount=120;
// // //     console.log(amount)
// // // }
// // // console.log(amount)
// // // console.log(1==="1")
// // // console.log(1=="1")

// // // type casting
// // let x=100;
// // console.log("line 59:", typeof x);
// // // number to string
// // x=String(x);
// // console.log("line 63:", typeof x);
// // let str="200";
// // str=Number(str);
// // console.log("line 67:", typeof str);
// // // string to number
// // let str2="WAHID";
// // str2=Number(str2);
// // console.log(str2)

// // console.log(typeof "1");
// // console.log(typeof "1"=="number");
// // console.log(typeof "")
// // console.log(typeof NaN);
// // console.log(typeof null);
// // console.log(typeof undefined);
// // //null vs undefined
// // // null means no value
// // // undefined means value is not assigned
// // console.log(typeof true);
// // console.log(typeof false);
// // // boolean to number
// // console.log(Number(true));
// // console.log(Number(false));
// // // boolean to string
// // console.log(String(true));
// // console.log(String(false));

// // console.log({}==null)

// // console.log({}==true)
// // let object={
// //     name:"Wahid",
// // }
// // let object2={
// //     name:"Wahid",
// // }
// // let object3=object;

// // console.log(typeof object3)
// // // reference vs value
// // console.log(object===object2)
// // console.log(object===object3)
// // console.log(object3===object2)

// // console.log(typeof JSON.stringify(object3))
// // console.log(JSON.stringify(object3)===JSON.stringify(object2))

// // object3.name="Changed Name"
// // object.update=(name)=>{

// // }
// // console.log(object3)
// // console.log(object)
// // console.log(object2)
// // console.log(win)
// // block scope
// {
//  let omega=100;
//  console.log("omega:", omega);
//     // function scope
//  function display(){
//     console.log("display function");
//  }
//  // call function
//  display();
// }
// // console.log("omega:", omega); // ReferenceError: omega is not defined
// // block scope
//  // undefined

//  // function scope
//  display()
//  // sequence of items 
//  // consecutive memory locations
//  let array=[]
//  let object={}
//  console.log("array:",typeof array);
//  console.log("object:",typeof object);
//  console.log(typeof array==typeof object);
//  // Array is a special type of object
//  console.log(Array.isArray(array));
//  console.log(Array.isArray(object));
//  // String , Number, Boolean, Object, Array, Function => classes 
//  // instance => object
// console.log(array instanceof Array);
// console.log(object instanceof Object);
// //
// // array data => list of items
// // object data => key value pairs
// for (let i=0;i<10;i++){
//     array[i]=i*10;
// }

// array[3]=999;

// // array.push({
// //     name:"Wahid",
// //     age:26,
// // })
// array.unshift(-10)

// console.log("array:",array);
// console.log("array length:",array.length);
// console.log("3rd index value:",array[3]);
// console.log(array.pop())
// console.log(array.shift())
// console.log("array after pop and shift:",array);
// console.log("index of item",array.lastIndexOf(40));
// console.log("includes 999:",array.includes(999));
// console.log(array.join(","));
// console.log(array.slice(2,5));
// console.log("delete 2nd index item:",array.splice(2,1));
// console.log("array after splice:",array);
// // insert item at specific index
// array.splice(2,0,222,333,444);
// console.log("array after insert using splice:",array);
// // class methods
// // without class methods is function
// // higher order function
// // map filter reduce forEach find findIndex some every
// let newArray=array.map((value,index)=>{
//     if(index!==0){
//      return value+5;
//     }
    
// // })
// // console.log("new array using map:",newArray);

// // let filteredArray=array.filter((value)=>{
// //     return value>50;
// // })
// // console.log("filtered array using filter:",filteredArray);

// // console.log("original array:",array);
// // let sum=array.reduce((a,b,index)=>{
// //     console.log("a:",a," b:",b," index:",index);
// //     return a+b;
// // },0)
// // console.log("sum using reduce:",sum);
// // // OOP => Object Oriented Programming
// // // class => blueprint
// // // object => instance of class
// const student1={name:"Wahid", age:26, grade:"A"}

// class Student{
    
//     // custom constructor
//     constructor(name,age,grade){
// //         //  console.log("Constructor called");
// //         //  console.log("name:",name);
// //         //  console.log("age:",age);
// //         //  console.log("grade:",grade);
// //          // initialize properties/attributes
// //          // keyword this
// //          this.name=name
// //          this.age=age
// //          this.grade=grade
// //     }
// //     printInfo(){
// //         console.log("Name:",this.name);
// //         console.log("Age:",this.age);
// //         console.log("Grade:",this.grade);
// //    }
// //    // get set methods
// //    setName(name){
// //         this.name=name;
// // //    }
// // // }
// // // const std=new Student();
// // // console.log(std.age);
// // // std.setName("Jhon");
// // // console.log(std.printInfo());
// // // const std2=new Student("Ali",22,"B");
// // // console.log(std2.printInfo());
// // // console.log(typeof std)
// // // console.log(std instanceof Student);
// // let stdObj={
// //      name:"Wahid",  
// //      age:26,
// //      grade:"A",
// //      printInfo:function(){
// //      //    console.log("Name:",this.name);
// //      //    console.log("Age:",this.age);
// //      //    console.log("Grade:",this.grade);
// //      },
// //      setName:function(name){
// //         this.name=name;
// //      },
// //      getName:function(){
// //         console.log(this);
// //         return this.name;
// //      },
// //      getAllInfo:()=>{
// //            // this will not work as expected in arrow function
// //           console.log(this);
// //      }
// // }
// // console.log(this)
// // stdObj.getName();
// // let stdNamesArray=[]
// // Object.keys(stdObj).map(key=>{
// //      if(key=="name"){
// //            stdNamesArray.push(stdObj[key]);
// //      }
// // })
// // Object.values(stdObj).map(value=>{
// //      console.log("value:",value);
// //      if(typeof value=="string"){
// //           stdNamesArray.push(value);
// //      }
    
// // })
// // Object.entries(stdObj).map(entry=>{
// //      console.log("entry:",entry);
// // })
// // Object.freeze(stdObj);
// // stdObj.name="Changed Name"
// // console.log("stdObj after freeze attempt:",stdObj);

// const object1={a:1,b:2}

// Object.seal(object1);
// console.log("object1 before modification:",object1);
// object1.a=100;
// console.log("object1 after modification:",object1);
// object1.c=300;
// console.log("object1 after adding new prop:",object1);
// Object.freeze(object1);
// object1.a=30;
// object1.newProp="New Property";
// console.log("object1 after seal attempt:",object1);
// let userCredentials={
//      email:"example@example.com",
//      password:"password123"
// }
// Object.freeze(userCredentials);
// //  after success 
// let sessionObj={
//      "refreshToken":"someRefreshTokenValue",
//      // access token will be same as refresh token
//      "accessToken":"refreshTokenValue"
// }
// Object.seal(sessionObj);
// sessionObj.accessToken="newAccessTokenValue"
// console.log("sessionObj after access token update:",sessionObj);

class Vehicle {
     constructor(make, model, year) {
          this.make = make;
          this.model = model;
          this.year = year;
     }
     getInfo() {
          return `${this.year} ${this.make} ${this.model}`;
     }
}
class Car extends Vehicle{
     constructor(make, model, year, doors,type) {
          //parent 
          super(make, model, year);
          this.doors = doors;
          this.type=type
     }
     // method overriding
     getInfo(){
          
          return `${super.getInfo()} ${this.doors} doors ${this.type}`;
     }
     
}
let myCar=new Car("Toyota","Camry",2020,4,"Sedan");
console.log(myCar.getInfo())
class Truck extends Vehicle{
     constructor(make, model, year, bedLength) {
          super(make, model, year);
          this.bedLength = bedLength;
     }
     getInfo(){
          return `${super.getInfo()} ${this.bedLength} bed length`;
     }
}
let myTruck=new Truck("Ford","F-150",2019,"6 feet");
console.log(myTruck.getInfo())

