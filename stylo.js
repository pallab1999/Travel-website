// const child = document.getRootNode();
// console.log(child.childNodes)
// const htmlele =  (child.childNodes[0])  //HTML element;
// console.log(htmlele.childNodes)     // ==> NodeList(3) [head, text, body]

// const headelement = htmlele.childNodes[0];
// const textnode = htmlele.childNodes[1];
// const bodynode = htmlele.childNodes[2];

// sibling relation ==>
// console.log(headelement.nextSibling)   //==> text node; (brothers same parent);

// console.log(headelement.childNodes) 


// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.backgroundColor = "#333"
// div.style.color = "#efefef"

// Create element ==> append,prepend,remove,before,after;
// const todolist = document.querySelector(".to_do")
// const newtodo = document.createElement("li");
// newtodo.textContent = "todo na";
// todolist.append(newtodo);
// console.log(newtodo);

// Events ===>
// ############## Click Event ###################


// Button Click Event Practice ==>

// const allbuttom = document.querySelectorAll(".my-button button");
// console.log(allbuttom.length);
// for(let i = 0;i<allbuttom.length; i++){
//     allbuttom[i].addEventListener("click",(e)=>{
//         // console.log(e.target);
//         e.target.style.backgroundColor = "yellow";
//     })
// }


const main = document.querySelector(".main")
const body = document.body;

function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}
main.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor = randomColor;
})


// e.preventdefault();


