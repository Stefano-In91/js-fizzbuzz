"use strict";


// Individuazione lista in html
const ul = document.getElementById("list");

// Fizz buzz function
for ( let i = 1 ; i <= 100 ; i++ ) {
   // Creazione elemento come funzione
   let createLi = document.createElement("li");
   
   if (i % 3 == 0 && i % 5 == 0 ) {
      // Multipli 5 e 3, fizz buzz
      createLi.innerHTML = `fizzbuzz`;
      createLi.classList.add("fizzbuzz");
   } else if (i % 3 == 0) {
      // Multipli 3 fizz
      createLi.innerHTML = `fizz`;
      createLi.classList.add("fizz");
   } else if (i % 5 == 0) {
      // Multipli 5 buzz
      createLi.innerHTML = `buzz`;
      createLi.classList.add("buzz");
   } else {
      // Non multipli i
      createLi.innerHTML = i;
   }
   
   ul.append(createLi);
}