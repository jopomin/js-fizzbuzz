/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

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