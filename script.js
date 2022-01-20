"use strict";

const lentele = document.querySelector("table");
const inputName = document.getElementsByTagName("input")[0];
const inputLastName = document.getElementsByTagName("input")[1];
const inputAge = document.getElementsByTagName("input")[2];
const prideti = document.getElementsByTagName("button")[0];
const istrintiPirma = document.getElementsByTagName("button")[1];
const istrintiPaskutini = document.getElementsByTagName("button")[2];

// Prideti
prideti.addEventListener("click", function(){
    if (inputName.value!="" && inputLastName.value!="" && inputAge.value!="" ){
            if (inputAge.value<= 0){
                alert("Amžius privalo būti teigiamas skaičius")
            } else {
                let n = `${inputName.value}`;
                let l = inputLastName.value;
                let a = inputAge.value;

                let naujaEilute = document.createElement("tr");
                naujaEilute.innerHTML=`<td>${n}</td> <td>${l}</td> <td>${a}</td> `;
                console.log(naujaEilute)
                lentele.append(naujaEilute);

                inputName.value="";
                inputLastName.value="";
                inputAge.value="";
                }
    } else {
        alert("Įveskite visus duomenis")
    }
});

// Istrinti pirma
istrintiPirma.addEventListener("click", function(){
    let visosEilutes = document.getElementsByTagName("tr");
    if (visosEilutes.length==1){
        alert("Nebėra ką trinti.");
    } else{
        let pirmaEilute = document.getElementsByTagName("tr")[1];
        pirmaEilute.remove();
    }
});

// Istrinti paskutini
istrintiPaskutini.addEventListener("click", function(){

    let visosEilutes = document.getElementsByTagName("tr");
    if (visosEilutes.length==1){
        alert("Nebėra ką trinti.");
    } else{
        visosEilutes[visosEilutes.length-1].remove();
    }
});