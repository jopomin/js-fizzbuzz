/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

console.log("Esercizio con ciclo For");
console.log("");

//ciclo for per stampare 100 numeri
for (i = 1; i < 101; i++) {

    //se il numero è divisibile sia per 3 che per 5 (and), allora
    if ((i % 3 == 0) && (i % 5 == 0)) {

        //stampa "FizzBuzz"
        console.log("FizzBuzz");

    //altrimenti, se è divisibile per 3 ma NON per 5, allora
    } else if ((i % 3 == 0) && (i % 5 != 0)) {
        //stampa solo "Fizz"
        console.log("Fizz");

    //altriment, se NON è divisibile per 3 ma solo per 5, allora
    } else if ((i % 3 != 0) && (i % 5 == 0)) {
        //stampa solo "Buzz"
        console.log("Buzz");
    //se non rientra in nessuna delle condizioni sopra, allora
    } else {
        //stampa il valore dell'indice
        console.log(i);
    }
}

console.log("");
console.log("Esercizio con ciclo While");
console.log("");

x = 1;

while (x < 101) {

    //se il numero è divisibile sia per 3 che per 5 (and), allora
    if ((x % 3 == 0) && (x % 5 == 0)) {

        //stampa "FizzBuzz"
        console.log("FizzBuzz");

    //altrimenti, se è divisibile per 3 ma NON per 5, allora
    } else if ((x % 3 == 0) && (x % 5 != 0)) {
        //stampa solo "Fizz"
        console.log("Fizz");

    //altriment, se NON è divisibile per 3 ma solo per 5, allora
    } else if ((x % 3 != 0) && (x % 5 == 0)) {
        //stampa solo "Buzz"
        console.log("Buzz");
    //se non rientra in nessuna delle condizioni sopra, allora
    } else {
        //stampa il valore dell'indice
        console.log(x);
    }

    x++;

}

console.log("");
console.log("Esercizio con ciclo Do-While");
console.log("");

y = 1;

do {

    //se il numero è divisibile sia per 3 che per 5 (and), allora
    if ((y % 3 == 0) && (y % 5 == 0)) {

        //stampa "FizzBuzz"
        console.log("FizzBuzz");

    //altrimenti, se è divisibile per 3 ma NON per 5, allora
    } else if ((y % 3 == 0) && (y % 5 != 0)) {
        //stampa solo "Fizz"
        console.log("Fizz");

    //altriment, se NON è divisibile per 3 ma solo per 5, allora
    } else if ((y % 3 != 0) && (y % 5 == 0)) {
        //stampa solo "Buzz"
        console.log("Buzz");
    //se non rientra in nessuna delle condizioni sopra, allora
    } else {
        //stampa il valore dell'indice
        console.log(y);
    }

    y++;

} while (y < 100);