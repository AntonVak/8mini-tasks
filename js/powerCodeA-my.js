//Урок 20. Front end Advanced. Сериализация данных, рассмотрение форм

console.log(xml)

const xmlStr = new XMLSerializer().serializeToString(xml);
const xmlDoc = new DOMParser().parseFromString(xmlStr, "application/xhtml+xml");

console.log(xmlDoc);



//Урок 21. Front end Advanced. Основные понятия асинхронного програм

// const ball = document.querySelector(".circle");
// const path = [
//     {x:50, y: 100},
//     {x:0, y: 50},
//     {x:50, y: 0},
//     {x:100, y: 50},
// ]
// let i = 0;
// function move(x, y) {
//     ball.style.right = `${x}%`;
//     ball.style.top = `${y}%`;
// }
// let idInterval = null;
// let idStart = null;

// window.addEventListener("mousemove", (e) => {
//     clearTimeout(idStart);
//     clearInterval(idInterval);
//     i = 0;
//     ball.style.display="none";
//     move(50, 50);
//     idStart = setTimeout(() => {
//         idInterval = setInterval(() => {
//             ball.style.display= "block"
//             const {x, y} = path[i];
//             move(x, y);
//             if(++i === path.length) i=0;
//         },1000)
//     }, 3000)
    
        
        
//         console.log("next")
//     })

    //Promise - вариант 

    const ball = document.querySelector(".circle");
    const path = [
    {x:50, y: 100},
    {x:0, y: 50},
    {x:50, y: 0},
    {x:100, y: 50},
]
let i = 0;
let idStart = null;
let is_start = false;

function move(x, y) {
    ball.style.right = `${x}%`;
    ball.style.top = `${y}%`;
}

// const promise = new Promise((resolve, regect) =>{

// })

function sleep(delay = 1000) {
    return new Promise((r) => {
        setTimeout(r, delay)
    })
}

(async function(){
    while(true){
        await sleep();
        if(!is_start) continue;
        const {x, y} = path[i];
        move(x, y);
        if(++i ===path.length) i = 0;
    }
})()

window.addEventListener("mousemove", (e)=> {
    is_start = true;
})

