function changeColor() {
    const hex_number = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E',];
    let hexcode = '';
    for(let i=0; i < 6; i++ ) {
        let random_index = Math.floor(Math.random() * hex_number.length);
        hexcode += hex_number[random_index]
    }
    document.getElementById('hex-colors').innerHTML = hexcode;
    document.getElementsByTagName('body')[0].style.background = '#' + hexcode;
}

let res1 = null === +"\n0\n";
console.log(res1);
let res2 = "\n0\n";
console.log(res2);

////////////////////////////////
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?');

// if(year < 2015) {
//     console.log("You early");
// } else if (year == 2015) {
//     console.log("You right");
// }else if (year > 2015) {
//     console.log("You wrong");
// }

////////////////////////////////

// let age = prompt("How old are you?", 1);

// let message = (age<3) ? "Здравствуй, малыш!" :
// (age <18) ? "Hello!" :
// (age < 100) ? "Здравствуйте!" : "Какой необычный возраст!";
// console.log(message);

// let company = prompt("Какая компания создала JavaScript?", " ");

// if(company == "0"){
//     console.log("True")
// }else {
//     console.log("False")
// }

// let company1 = prompt("Какое «официальное» название JavaScript?");

// if(company1 == "ECMAScript") {
//     console.log("True")
// }else {
//     console.log("Не знаете? “ECMAScript”!")
// }

// 


// let a = 1;
// let b = 10;
// result = (a + b < 4) ? "Мало" : "Много";

// console.log(result);


// let login = prompt("dhjgdjhgdjhjd");
// let message = 
//     (login == 'Сотрудник') ? 'Привет':
//     (login == 'Директор') ? 'Здравствуйте':
//     (login == '') ? 'Нет логина' : '';

// console.log(message);    

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = 150;

if(age > 14 && age < 90) {
    console.log("Good")
}else {
    console.log("Bad")
}


// let login = prompt("dhjgdjhgdjhjd", '');

// if(login === "Admin"){
//     let pass = prompt('Пароль?', '')
//     if(pass === 'Boss'){
//         console.log("I am a boss")
//     }else if(pass === "" || pass === null) {
//         console.log("Отменено")
//     }else {
//         console.log("Неверный пароль")
//     }

// }else if(login === "" || login === null) {
//     console.log("Отменено")
// }else {
//     console.log("Я вас не знаю")
// }

// Циклы while и for////////////////////////////

// let i2 = 0;
// while(i2 < 3) {
//     console.log(i2);
//     i2++
// }



// let i3 = 0;
// do {
//     console.log( i3 );
//   i3++;
// } while (i3 < 5);

// for (let i4 = 0; i4 < 3; i4++) {
//     console.log( i4 );
// }

// for (let i5 = 0; i5 < 3; ++i5) {
//     console.log( i5 );
// }

// let i6 = 0;
// while(++i6 < 5) console.log( i6 );

// let i7 = 0;
// while(i7++ < 5) console.log( i7 );



// for(i7=2; i7 <= 10; i7++) {
//     if(i7 % 2 ==0)
//     console.log( i7 );
// }

// let i8 = 0;

// while(i8 < 3 ) {
//     alert( `number ${i8}!` );
//     i8++;
// }

// let hund;

// do {
//     hund = prompt("Your number", 0)
// }while(hund <= 100 && hund);

// Конструкция "switch"////////
// let browser;

// if(browser === "Edge") {
//     alert( "You've got the Edge!" );
// }else if(browser === 'Firefox'||'Safari'){
//     alert( 'Okay we support these browsers too' );
// }else {
//     alert( 'We hope that this page looks ok!' );
// }


let h3 = document.querySelector("h3");
h3.addEventListener("click", function(){
    h3.innerHTML = "HI my name is..."
})







