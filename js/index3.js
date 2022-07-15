
// document.getElementById("obj1").innerHTML = num5;

// LOOPS/////////////////////////

let x;
for( x = 0; x<5; x++ );
console.log(x);

let z = 1;
while( z <= 5 ){
    console.log(x);
    z++;

};

let age = 13;

if( age < 14 || age > 90) {
    console.log("age");
}

// OBJECT/////////////////////////
const student = {
    name: "ant",
    age: 28,
    studies: "Comp"
}
document.getElementById("obj1").innerHTML = student.name + " of the age " + student.age + " " + student.studies;

////////////////////////
let user = {
    name: "ant",
    age: 28,
};

function sayHi() {
    alert("Hello!")
    

}
user.message = sayHi;
document.getElementById("obj2").innerHTML = "Hi " + user.name;
document.getElementById("click").onclick = user.message;

// FUNCTION/////////////////////////

function myfunc(val1, val2) {
    document.getElementById("obj3").innerHTML = val1 * val2;
}
myfunc(10, 5);

// let x1 = function() {
//     alert("Hello!")
// }
// document.getElementById("obj4").innerHTML = x1();

// FUNCTION Constructor/////////////////////////
const funcmy = new Function('a', 'b', "return a+b")
const x2 = funcmy(10, 20)
document.getElementById("obj5").innerHTML = x2;

// FUNCTION SELF - INVOKING /////////////////////////

(function() {
    console.log("Welcome!")
}) 
()

// FUNCTION AS Values/////////////////////////

function Product(a,b) {
    return a *b;
}
let y = Product(10, 30)
document.getElementById("obj6").innerHTML = y;

// FUNCTION AS Object/////////////////////////
const body = "return rad * rad";
const circle = new Function("rad", body);
console.log(circle(5));

// FUNCTION Arrow/////////////////////////
const myfunc2 = (a,b,c) => {
    return a*b*c;
}
let prodc = myfunc2(10,20,30);

document.getElementById("obj7").innerHTML = prodc;

// FUNCTION Predefined/////////////////////////


// Varible Scope/////////////////////////

let x3 = 20;
function myfunc3() {
    let b2 = 30
    document.write(x3+b2)
}
myfunc3()

const a3 = 10;
function firstFunc() {
    let b3 = 20;
    function secondFunc() {
        let c3 = 20 + a3+b3;
        return c3    
    }
    return secondFunc();
}
const sum3 = firstFunc();
document.write(sum3)


// Promise  /////////////////////////
let promise = new Promise(function(resolve, reject) {
    // функция-исполнитель (executor)
    // "певец"
  });
  promise.then(
    function(result) { /* обработает успешное выполнение */ },
    function(error) { /* обработает ошибку */ }
  );  

  let promise1 = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
  });  


  let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(''), 1000);
  });
  
  // resolve запустит первую функцию, переданную в .then
  promise2.then(
    result => alert(result), // выведет "done!" через одну секунду
    error => alert(error) // не будет запущена
  );



  function delay(ms) {
    return new Promise(function(res, reg){
        setTimeout(() => res("выполнилось через 3 секунды"), 3000)
    })
    delay.then(alert);
  }
  
  
  // Async/await  /////////////////////////

  let result = function(score) {
      return new Promise(function(res, rej){
          console.log('Calc results...')
          if(score > 50)
            res('You have passed')
          else
             rej(' Error')
      })
  }
  let grade = function (response){
    return new Promise(function(res, rej){
        console.log('Calc your grade...')
        res('Your grade is A. ' + response)
    })
  }
//   result(80).then(response =>{
//     console.log('Results received')
//     return grade(response)
//   }).then(finalgrade => {
//       console.log(finalgrade)
//   }).catch(err => {
//       console.log(err)
//   })

async function calcResults() {
    try{
        const response = await result(30)
        console.log('Results received')
        const finalgrade = await grade(response)
        console.log(finalgrade)
    }
    catch(err) {
        console.log(err)
    }
}
calcResults()

// Перепишите один из примеров раздела  ///////////

// async function loadJson(url) {
//     let response = await fetch('url')
//         if (response.status == 200) {
//             let json = await response.json();
//             return json;
//     }
//     throw new Error(response.status);
    
// }
// loadJson('no-such-user.json') // (3)
//   .catch(alert);

  // Перепишите один из примеров раздела  ///////////

  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {

    wait().then(result => alert(result));
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
  }
//   f()


// THIS  //////////////////////////////////////////////////

var value1 = 50;

function myfunc4() {
    var value1 = 100;
    alert("Value: "+ value1)
    alert("This value " + this.value1)
}
myfunc4();


const rendom = {
    name: 'Jon',
    video: ['Java', 'this', 'key'],
    info(){
        this.video.forEach(function(tag){
            console.log(tag);
        })
        
    }
}
rendom.info();


// Regular Expression  /////////////////////////