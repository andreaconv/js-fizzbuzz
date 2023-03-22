FIZZBUZZ
===

## CONSEGNA

Scrivi un programma che stampi in console i numeri da 1 a 100 ma al posto del numero 

- per i multipli di 3 stampi “Fizz”;
- per i multipli di 5 stampi “Buzz”.
- per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**Prima di partire a scrivere codice poniamoci qualche domanda:**

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?


**Consigli del giorno:**

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare;

2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”.

>**BONUS 1:**

Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

>**BONUS 2:**

Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## STEPS

1. Creo un ciclo **for** con un contatore fino al 100;

2. All'interno del ciclo creo un **if** per selezionare i multpli di 3 con la formula vista in calsse usando il modulo (%) ----> _if(!(i % 3))_ 

3. Una volta trovato il modo per selezionarli gli vado a sostituire il contenuto con “Fizz”;

4. Seleziono i multipli di 5 con la stessa formula dentro un  **else if** e sostituisco il contenuto con “Buzz”;

5. Provo a creare un'altro **else if** per selezionare entrambi i multipli che saranno multipli di 15;
