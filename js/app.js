"use strict";

// Fizz buzz function
for ( let i = 1 ; i <= 100 ; i++ ) {
   // Individuazione lista in html
   const ul = document.getElementById("list");
   // Creazione elemento come funzione
   let createLi = document.createElement("li");
   
   if (((i % 3) == 0) && ((i % 5) == 0 )) {
      // Multipli 5 e 3, fizz buzz
      createLi.innerHTML = `fizzbuzz`;
      ul.append(createLi);
      createLi.classList.add("fizzbuzz");
   } else if ((i % 3) == 0) {
      // Multipli 3 fizz
      createLi.innerHTML = `fizz`;
      ul.append(createLi);
      createLi.classList.add("fizz");
   } else if ((i % 5) == 0) {
      // Multipli 5 buzz
      createLi.innerHTML = `buzz`;
      ul.append(createLi);
      createLi.classList.add("buzz");
   } else {
      // Non multipli i
      createLi.innerHTML = i;
      ul.append(createLi);
   }
}