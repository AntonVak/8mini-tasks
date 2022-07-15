const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log(arr.push(10));
console.log(arr);

console.log(arr.shift());
console.log(arr);

let cars = ["bmw", "volvo", "honda", ];
document.getElementById("demo").innerHTML = cars;


let len = cars.length;
document.getElementById("demo").innerHTML = len;

let last = cars[cars.length - 1];
document.getElementById("demo").innerHTML = last;

cars.forEach((item, a) => {
    console.log(item, a);
})

document.getElementById("demo").innerHTML = cars.toString();

let last1 = cars.pop();
document.getElementById("demo").innerHTML = last1;

let last2 = cars[cars.length-1];
console.log(last2);


let bikes = ['111111', '222222', '3333333'];
let newarr = cars.concat(bikes);
console.log(newarr);

newarr.sort();
document.getElementById("demo").innerHTML = newarr;

newarr.reverse();
document.getElementById("demo").innerHTML = newarr;


let num1 = [2, 3, 4, 5, 6, 7];
let num2 = num1.map(mult);
function mult(value){
    return value * 2;
}
document.getElementById("demo").innerHTML = num2;

let num3 = num1.filter(comp);
function comp(value) {
    return value > 4;
}
document.getElementById("demo2").innerHTML = num3;

let num4 = num1.reduce(sum);
function sum(total, value) {
    return total + value;
}
document.getElementById("demo3").innerHTML = num4;
// ////////////////////////////////////

let names = 'Вася, Петя, Маша';
let arr3 = names.split(', ');
for (let name of arr3) {
  console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}



// ////////////////////////////////////

const styles = ['juzz', 'bluz'];
styles.push('rockNroll');


styles[1] = 'classica'

styles.shift()
styles.unshift('rap', 'raggy');

const lenstyles = styles.map(function(e){
    return e.length;
})
document.getElementById("demo3").innerHTML = lenstyles;
document.getElementById("demo1").innerHTML = styles;
// ////////////////////////////////////

const arr6 = ["Есть", "жизнь", "на", "Марсе"];

const arr6Len = arr6.map((len) => {
    return len.length;
})

document.getElementById("demo4").innerHTML = arr6Len;

// ////////////////////////////////////
const arr7 = [1,2,3,4,5];

let num5 = arr7.reduce(sums);
function sums(total, value) {
    return total + value;
}
document.getElementById("demo5").innerHTML = num5;

// LOOPS/////////////////////////

