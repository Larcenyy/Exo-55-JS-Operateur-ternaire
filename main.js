let element = document.querySelector("p");

let mySpan = document.querySelectorAll("span");

let last = document.getElementById("resultat");

console.log(element);
console.log(mySpan);
console.log(last);

let result;
for(let i = 0; i < mySpan.length; i++){
     mySpan[i].innerText = i.toString();
}

mySpan[0].innerText  = "5";
mySpan[1].innerText  = "12";

if (mySpan[0].innerText === "5" && mySpan[1].innerText <= "12"){
    result = (5 + 12);
}

if (result -10 <= 10){
    mySpan[0].innerText = "Attention"
    mySpan[0].style.background = "red";
}



// TERNAIRE ICI
// last.innerHTML = (mySpan[0].innerText === "5" && mySpan[1].innerText <= "12") ?


// element = mon texte
// myspan = tout mes spans
// last récupère l'id résultat
