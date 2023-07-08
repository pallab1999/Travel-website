// console.dir(document)
// document object model
//select element using get element by id ==>

//  const mainheading = document.getElementById("heads")
// console.dir(document.getElementById("heads"))
// const mainheading = document.querySelector("#heads")
// console.log(mainheading);
// const header = document.getElementById("heads")
// console.log(header.textContent);
// header.textContent = "travel with us"
// console.log(header.textContent);


// Style ==>
// const mainheading = document.querySelector(".head .head-content h1")
// console.log(mainheading .style)
// mainheading.style.color = "green"

// HTML collection ==>
//const navitem = document.getElementsByTagName("a");
// const navitem = document.querySelectorAll("nav-items");
// console.log(navitem.length);

// for(let i = 0;i<navitem.length;i++){
//     // console.log(navitem[i]);
//     const navitems = navitem[i];
//     navitems.style.backgroundColor="#fff";
//     navitems.style.color="green";

// }


// InnerHtml ===>
// const head = document.querySelector(".head-content");
// head.innerHtml = "<h1>Inner Html Changed</h1>";
// console.log(head.innerHtml);

// const tagg = document.createElement("a");
// tagg.textContent = "exploree";
// const taga = document.createAttribute(".head-content");
// taga.append(tagg);
// console.log(taga);

// events =====>
// ##################### click event #####################
const btn = document.querySelector(".head-content a");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me");
// }


// Method -> Add Event Listner ==>

function clickedme(){
    console.log("you clicked me")
}
btn.addEventListener("click", clickedme)
