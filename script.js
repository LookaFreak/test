
// //in console ci deve finire il contenuto di testo del div con id test

// //? 5. Dichiarare una variabile
// //* ES.2 - Dichiara una variabile, poi stampala in console (aka. "consoleloggala").
// let myFirstVar;
// console.log(myFirstVar);
// //* ES.3 - Dichiara una variabile e contestualmente valorizzala a 10, poi stampala in console.
// let mySecondVar = 10;
// console.log(mySecondVar);

// //* ES.4 - Se volessi ora annullare il valore della variabile?
// mySecondVar = null;
// console.log(mySecondVar);

// //? 6. Riassegnare una variabile
// //* ES.5 - Assegna alla variabile dell'ES.4 (già dichiarata) la stringa Pippo.
// mySecondVar = "Pippo";
// console.log(mySecondVar);

// //? 7. Prepariamo i biscotti!
// //* ES.6 - Riempiamo le 3 variabili (ciotole piccole) con i rispettivi ingredienti
// // butter - 120gr, sugar - 80gr, flour - 260gr
// let sugar = 120;
// let butter = 80;
// let flour = 260;

// //* ES.7 - Aggiungiamo il valore (il contenuto..) di butter e sugar in una terza variabile medium bowl
// // Dopo di che 'consolelogga' la medium bowl!
// let mediumBowl =  butter + sugar;
// console.log(mediumBowl);

// //* ES.8 - Aggiungiamo il valore (il contenuto..) di flour alla stessa variabile medium bowl
// // Dopo di che 'consolelogga' la medium bowl!
// mediumBowl = mediumBowl + flour;
// console.log(mediumBowl);

// //? 8. Forma compatta per la riassegnazione di una variabile
// // Riformula più elegantemente la soluzione dell'ES.8.
// let weed = 5;
// let tobacco = 10;
// let cartina;
// let hashish = 10;

// cartina = weed + tobacco;
// console.log(cartina);


// cartina += hashish;
// console.log(cartina);



// //? DATA TYPES
// //* Demo #1 - Stampa in console Infinity e NaN.
// console.log(10/0);
// console.log("pippo" / 21);

// //? Dato di tipo stringa
// //* Demo #2 - Stampa 3 stringhe in console usando tutti i possibili delimitatori.
// // Apici singoli
// console.log('palermo');
// // Doppi apici
// console.log("paliemmo");


// //? Dato Booleano
// //* Demo #3 - Stampa in console un valore booleano.
// let myBoolean = true;
// console.log(myBoolean);

// //? undefined e null
// //* Demo #4 - Stampa in console undefined e null.
// let pluto;
// console.log(pluto);
// pluto = null;
// console.log(pluto);

// //? STRUCTURAL TYPES
// //* Demo #5 - Dall'oggetto riportato sotto, stampa in console l'età dello studente.
// let vizio = {
//     name: "Franco",
//     age: 70,
//     surname: "Giudice",
//     hobby: "10eLotto",
// };

// console.log(vizio.age);
// console.log(vizio.hobby);




// //? ARITHMETIC OPERATORS
// //* Demo #6a - Stampa in console il risultato di un'operazione di:
// // Somma
// console.log(7+3);
// // Sottrazione
// console.log(242-100);
// // Moltiplicazione 
// console.log(9*9);
// // Divisione 
// console.log(14/2);
// // Modulo
// console.log(16%2);
// // Es. Modulo
// console.log(400%300);
// // Un'espressione algebrica
// console.log((7+3)*9);

// //? PEMDAS
// // Vedasi immagine PEMDAS nella cartella images!

// //? L'operatore + con dati numerici, stringhe, misti
// //* Demo #6b - Esegui un'addizione, una concatenazione di 2 stringhe ed un "mix":
// console.log("valentino" + 46 + "Rossi");
// //? parseInt & parseFloat
// //* Demo #6c - Esegui la somma fra un numero puro ed uno di tipo stringa.
// // Cosa succede se applico parseInt o parseFloat ad una stringa?
// console.log("7" + 3);
// console.log(parseInt("7") + 3);
// console.log(parseFloat("3.3") + 2.2);

// //? Operatori logici
// //* Demo #7a - Salva una condizione in una variabile. Che tipo di dato contiene?
// let sensitiveVar = 4 > 5;
// console.log(sensitiveVar);

// //? Operatori di Uguaglianza/Disuguaglianza (==, ===, !=, !==)
// //* Demo #7b - Usa gli operatori di:
// // Uguaglianza debole
// console.log('14' == 14); //trye
// console.log (2 == 2); //true



// // Uguaglianza stretta
// console.log(15 === '15'); //false
// console.log(27 === 27); //true
// // Disuguaglianza debole
// console.log(7 != 7); // false
// console.log(10 != '10') //false
// // Disuguaglianza stretta
// console.log(42 !== 42); //false
// console.log('69' !== 69); 

// //? Operatori di Maggioranza/Minoranza (>, >=, <, <=)
// //* Demo #7c - Esegui un:
// // Confronto fra numeri
// console.log(7 > 3);
// console.log(8 < 5);
// console.log(10 >= 10);
// console.log(50 <= 40);
// // Confronto fra caratteri/stringhe
// console.log(142 > "pippo");
// console.log("peppe" >= "nappa");
// console.log("giuseppe" < 25);
// // Problematico, vedi: https://it.javascript.info/comparison

// //? Operatore NOT (!)
// //* Demo #8a - Inverti l'esito di una condizione grazie all'operatore NOT!
// let nappa = 42
// console.log(!(16 > 5));

// //? Operatore AND (&&)
// //* Demo #8b - Valuta 2 condizioni in AND all'interno di un console.log().
// console.log((5 > 2) && (7 > 4));
// console.log((5 < 2) && (7 > 3) && ( 10 > 142));

// //? Operatore OR (||)
// //* Demo #8c - Valuta 2 condizioni in OR all'interno di un console.log().
// console.log((10 > 8) || (15 > 10));
// console.log((20 > 3) || ( 3 < 6) || ( 10 < 14));

// //? EXTRA: Valuta l'esito della seguente condizione in AND, OR.
// console.log((41 > 51) && (13 > 16) || (8 < 2));


// let myNum = 21;
// console.log((myNum == "21") && ((myNum % 5 === 1) || !(myNum > 15)));



// // CONDITIONALS
// //? 1. L'if
// // if(CONDITION) { Do this if CONDITION is TRUE! }
// //* Fai una stampa in console solo se la variabile test è true (Boolean).
// let test = true;
// if (test === true) {
//     console.log("la variabile è vera")
// }
// //? 2. if-else
// // if(CONDITION) { Do this if CONDITION is TRUE! } else { Do this if CONDITION is FALSE! }
// //* Rileva la parità o disparità di un numero intero in console.
// let test2 = 8;
// if(test2 % 2 === 0) {
//     console.log(test2 + " è pari");
//     } else {
//         console.log(test2 + " è dispari");
//     }

// //? 3. if + AND/OR conditions
// // if(COND1 && COND2) { Do this if both CONDITIONS are TRUE! }
// // if(COND1 || COND2) { Do this if at least one CONDITION is true }
// //* Mostra un esempio di AND / OR conditions nell'IF.
// if ((5 > 3) && (10 < 15)){
//     console.log("condizione verificata");
// } else {
//     console.log(" lacondizione non è verificata");
// }

// //? 4. if senza condizioni (Truthy or Falsy values)
// //! Falsy: false, 0, “”, null, undefined, NaN, document.all
// // Truty: Everything else...
// //* Stampa in console il contenuto di una variabile, solo nel caso in cui questa sia valorizzata.
// let firstName = "Ale"
// if (firstName){
//     console.log(" il nome fornito è " + firstName);
// } else {
//     console.log(" il valore è assente");
// }


// //? 5. Operatore Ternario (Assegnazione condizionale)
// // let myVar = (boolean) ? value_if_true : value_if_false;
// //* price vale 50 se c'è lo sconto, altrimenti vale 100.
// let sconto = 95;
// let price = (sconto > 100) ? 50 : 100;
// console.log(price);


// // LOOPS (1)
// //? 6. Il ciclo for
// //* Stampa in console i numeri interi da 0 a 9.
// for (let step = 0; step < 9; step++) {
//     console.log('sto facendo un passo');
// }


// // Alterazioni del ciclo
// //? 7. Il break
// //* Interrompi un for da 0 a 9 subito dopo il 5.
// for (let index = 0; index < 9; index++) {
//     console.log(index);
//     if(index === 5) {
//         break;
//     }
    
// }

// //? 8. Il continue
// //* Stampa in console con un for i numeri interi da 0 a 9, 5 escluso.
// for (let pippo = 0; pippo <= 9; pippo++) {
//     if(pippo === 5) {
//         continue;
//     }
    
//     console.log(pippo);
    
// }





// // LOOPS (2)
// //? 9. Il ciclo while
// //* Stampa in console i numeri interi da 0 a 9 con un ciclo while.
// let n = 10;
// while (n > 0) {
//     n--;
//     console.log(n);
    
// }

// //? 10. Il ciclo do-while
// //* Imposta un ciclo do-while che non verifica mai la condizione nel while.
// let co = 0;
// do{
//     console.log(co);
//     co++;
// } while(co > 3)

// //? 11. Switch-case
// //* Produci la stampa in console del giorno sulla base del relativo numero:
// //* 1=Monday, ..., 7=Sunday: prima con una catena di else-if(s) e poi con uno switch-case.
// let dayNumber = 2;

// if (dayNumber === 1) {
//     console.log("Lunedi");
// } else if (dayNumber === 2) {
//     console.log("Martedi");
// } else if (dayNumber === 3) {
//     console.log("Mercoledi");
// } else if (dayNumber === 4) {
//     console.log("Giovedi");
// } else if (dayNumber === 5) {
//     console.log("Venerdi")
// } else if (dayNumber === 6) {
//     console.log("Sabato");
// } else if (dayNumber === 7) {
//     console.log("Domenica");
// } else {
//     console.log("Errore");
// }
    



// // Zucchero sintattico di una serie di catene else-if:
// switch (dayNumber) {
//     case 1:
//         console.log("lunedi");
//         break;
//     case 2:
//         console.log("martedi");
//         break;
//     default:
// console.log("errore");
//         break;
// }


// //? 2. Definire una funzione (senza argomenti)
// // // Dichiaro la mia funzione
// function cool() {
//     console.log("Hello mom");
// }

// //? 3. Richiamare (invocare) una funzione
// cool();

// //? 4. Costruire una funzione (saluto personalizzato)
// let bye = "Ricky"
// function salve(bye) {
//     console.log("Ciao " + bye)
// }
//  salve(bye);


// // Crea una funzione che acquisisca in input un array ed un intero e stampi in console l'elemento dell'array associato alla chiave pari all'intero fornito.
// let array = ["Ciao", 72, "Pippo", true];
// let index = 21; // index out of bound...

// function arrayPrinter(mioarray, mioindex) {
//     if (mioindex >= mioarray.length) {
//         console.log("errore");
//         return 20;
//     }
//     console.log(mioarray[mioindex]);
// }

// let input = arrayPrinter(array,index);
// console.log(input);

// //? 5. Costruire una funzione (fattoriale di n)
// // Target: Costruire una funzione che calcoli il fattoriale di un numero intero.
// // Cosa significa fattoriale di un numero intero n?
// // n! = nx(n-1)x(n-2)x...x1 , Es. 3! = 3 * 2 * 1 = 6, 4! = 24
// // Cosa significa "Ritornare" un valore?
// // Extra: migliora la funzione filtrando i valori non numerici.
// function fact(n){
//     let ris = 1;
//     for (let i = n; i > 0; i++) {
//         ris*=i;
//         return ris;
      
//     }
// }
// let result = fact(2);
// console.log(result);

// //* Demo #2 - Manipolazione stringhe
// //? 6. Metodi per stringhe
// // Th. La stringa in JS è un array! (Dimostrazione)
// let myString = "Alessandro";
// console.log(myString[5]); // a
// console.log(myString.length); //10

// let myStrings = "banana";
// let subStr = "aperol";

// //* a. toLowerCase / toUpperCase [Output: String]
// console.log(myStrings.toUpperCase());
// let myModString = myStrings.toUpperCase();

// console.log(myStrings.toLowerCase());
// let anModString = myStrings.toLowerCase();

// //* b. includes [Output: Boolean]
// console.log(myStrings.includes(subStr));

// //* c. concat [Output: String]
// console.log(myStrings.concat(subStr));

// //* d. repeat [Output: String]
// console.log(myStrings.repeat(2));

// //* e. replace [Output: String]
// console.log(myStrings.replace("banana" , "gin"));

// //* f. replaceAll [Output: String]
// console.log(myStrings.replaceAll("banana" , "olio"));


// //? EXTRA 1: Funzioni anonime & Arrow functions (Cenni)
// // Se c'è tempo... OK!
// // ECMASCript 2015
 
// let people = {
//     name: "Ale",
//     age: 28,
//     boss: () => {
//         console.log("io sono il boss")

//     }
// }

// console.log(people.name);
// people.boss();




//? 1. getElementById()
//* Seleziona l'elemento che vuole cambiare colore nel DOM.
// let myDiv = document.getElementById("test");
// console.log(myDiv);


// //? 2. getElementsByClassName()
// //* Seleziona gli elementi con classe mydiv.
// let myDivs = document.getElementsByClassName("mydiv");
// console.log(myDivs)


// //? 3. getElementsByTagName()
// //* Seleziona tutti gli elementi di tipo <li>.
// let list = document.getElementsByTagName("li");
// console.log(list);
// //? 4. querySelector()
// //* Seleziona il primo <li> con classe lista.
// let firstList = document.querySelector(".lista");
// console.log(firstList);


// //? 5. querySelectorAll()
// //* Seleziona tutti i <li> con classe mylist.
// let lis = document.querySelectorAll(".mylist");
// console.log(lis);


// //? 6. node.children
// //* Seleziona tutti i figli del <div> con id list-title, sfruttando la proprietà children.
// let nodo = document.getElementById("list-title");
// let childNods = nodo.children;
// console.log(childNods);


// //? 7. node.innerText
// //* Cattura il testo contenuto nel <div> con id make-me-red.
// let sbocco = document.getElementById("make-me-red")
// let text = sbocco.innerText;
// console.log(text);



// //* Modifica il testo contenuto nel <div> con id make-me-red come "Sono stato modificato!".
// let anotherOne = document.getElementById("make-me-red");
// anotherOne.innerText = "sono stato modificato";


// //? 8. node.style.color
// // Accontenta il div che vuole diventare rosso!
// let makeMeGood = document.getElementById("make-me-red");
// makeMeGood.style.color = "red";

// //? 9. node.classList.add() / remove() / toggle()
// // 0. Stampa la lista delle classi dell'<ul>
// let anotherList = document.querySelector("#list-title > ul" )
// console.log(anotherList.classList);


// // a. Togli la classe pluto dall'<ul>.
// let almostOne = document.querySelector(".pluto")
// almostOne.classList.remove("pluto");
// console.log(almostOne);

// // // b. Aggiungi una classe test all'<ul>.
// let finalOne = document.querySelector("#list-title > ul")
// finalOne.classList.add("test");
// console.log(finalOne);


// // c. Esegui il toggle della classe my-list sull'<ul>
let realOne = document.querySelector("#list-title > ul")
realOne.classList.toggle("mylist")
console.log(realOne);

//? 10. onclick=""
// Lancia una funzione alertMe() (che produce un alert ed un c-log) al click sul button con id btn.
function alertMe() {
    alert("qualcosa è stato cliccato");
    console.log("mi hanno triggerato");
}


//? 11. createElement
// a. Creiamo un nuovo elemento <div>.
let newDiv = document.createElement("div");
console.log(newDiv);

// // b. Inserisci un testo nel <div> appena creato sopra, cambia il testo al suo interno in rosso ed assegnagli un id new-div.
newDiv.innerText = "sono stato appena creato";
newDiv.style.color = "red";
newDiv.id = "new-div";

// //? 12. parent_node.appendChild()
// // c. Iniettiamo il <div> appena creato e personalizzato alla fine del <div> con id main-content.
let myDad = document.querySelector("#main-content");
myDad.appendChild(newDiv);

// //? 13. parent_node.insertBefore(child, position_element)
// // e. Iniettiamo il <div> appena creato e personalizzato prima dell'<ul> contenuto 
// // nel <div> con id main-content.
let last = document.getElementById("list-title");
last.insertBefore(newDiv, last); //non funziona