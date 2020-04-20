// quanti km l'utente deve percorrere
var km = prompt("Quanti km vuoi percorrere?", "100");
console.log('km ' + km);
// età del passeggero
var age = prompt("Quanti anni hai?");
console.log('age ' + age);

// calcolare prezzo del viaggio
var price = km * 0.21;

// prezzo del biglietto è definito in base ai km (0.21 € al km)
if (age < 18) {  // minorenni
     console.log('€' + price * 0.8 + ' sconto 20%');  // sconto 20%
}
else if (age > 65) {  // over 65
      console.log('€' + price * 0.6 + ' sconto 40%'); // sconto 40%
}
else {
    console.log('€' + price + ' prezzo intero');
}
