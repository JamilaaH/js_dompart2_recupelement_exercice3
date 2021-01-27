// 1
let divContent = document.querySelector('#content');
console.log(divContent);

// 2
let divContentAll = document.querySelectorAll('#content');
console.log(divContentAll);

//3
let myList = document.querySelector(".important");
console.log(myList);

//4
let allLi = document.querySelectorAll(".important");
console.log(allLi);

//5
let liste = document.querySelectorAll('li');

let tab = Array.from(liste);

tab.forEach(element => {
    let monTexte = element.innerText
    console.log(monTexte.substr(0,monTexte.length-1) + monTexte.substr(-1).toUpperCase());
});

//6 
let idContent = document.querySelector("#content")
let paraInId = idContent.querySelector('.grandParagraphe');
console.log(paraInId);