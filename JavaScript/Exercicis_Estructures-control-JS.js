// 13.1  Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero.
// let numero = parseInt(prompt("Introdueix un nombre"))
// if (numero < 0) {
//     console.log("El nombre llegit és negatiu")
// }

// 13.2 Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell.
// let numero = parseInt(prompt("Introdueix un nombre"))
// if (numero % 2 === 0) {
//     console.log("El número llegit és parell")
// }

// 13.3 Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas.
// let numero = parseInt(prompt("Introdueix un nombre"))
// if (numero % 2 === 0) {
//     console.log("El número llegit és parell")
// } else {
//     console.log("El número llegit és senar")
// }

// 14.1 Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el número llegit és positiu” en cas contrari.
// let numero = parseInt(prompt("Introdueix un nombre"))
// if (numero < 0) {
//     console.log("El nombre llegit és negatiu")
// } else {
//     console.log("El nombre llegit és positiu")
// }

// 14.3 Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. Només pots fer servir una instrucció if-else.
// let numero1 = parseInt(prompt("Introdueix un nombre"))
// let numero2 = parseInt(prompt("Introdueix un altre nombre"))
// if (numero1 > numero2) {
//     console.log(numero1)
// } else {
//     console.log(numero2)
// }

// 14.4  Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el tercer.
// let numero1 = parseInt(prompt("Introdueix un nombre"))
// let numero2 = parseInt(prompt("Introdueix un altre nombre"))
// let numero3 = parseInt(prompt("Introdueix un altre nombre més"))
// if (numero1 > numero2 && numero1 > numero3) {
//     console.log(numero1)
// } else if (numero2 > numero1 && numero2 > numero3) {
//     console.log(numero2)
// } else {
//     console.log(numero3)
// } 

// 14.5 Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats. 
// let numero1 = parseInt(prompt("Introdueix un nombre"))
// let numero2 = parseInt(prompt("Introdueix un altre nombre"))
// let numero3 = parseInt(prompt("Introdueix un altre nombre més"))
// if (numero1 > numero2 && numero1 > numero3) {
//     if (numero2 > numero3) {
//         console.log(numero1,numero2,numero3)
//     } else {
//         console.log(numero1,numero3,numero2)
//     }
// } else if (numero2 > numero1 && numero2 > numero3) {
//     if (numero1 > numero3) {
//         console.log(numero2,numero1,numero3)
//     } else {
//         console.log(numero2,numero3,numero1)
//     }
// } else if (numero3 > numero1 && numero3 > numero2) {
//     if (numero1 > numero2) {
//         console.log(numero3,numero1,numero2)
//     } else {
//         console.log(numero3,numero2,numero1)
//     }
// }

// 14.6 En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25
// let carnet = prompt("Tens carnet de conduir? (si/no)")
// let alcohol = parseFloat(prompt("Quin és el valor de la prova d’alcoholèmia?"))
// if (carnet === "si" && alcohol < 0.25) {
//     console.log("Sí, pots conduir")
// } else {
//     console.log("No pots conduir")
// } 

// 14.7 Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran el nombre més petit.
// let numero1 = parseInt(prompt("Introdueix un num"))
// let numero2 = parseInt(prompt("Introdueix un altre num"))
// let resultat
// if (numero1 > numero2) {
//     resultat= numero1 - numero2
// } else {
//     resultat= numero2 - numero1
// }
// console.log(resultat)

// 14.8 Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt. En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que el transport és gratis. En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en concepte de cost d’enviament. 
// let quantitat = parseFloat(prompt("Introdueix el preu a pagar"))
// let preuTotal
// if (quantitat < 30) {
//     preuTotal = quantitat + 4.95
// } else {
//     preuTotal = quantitat
// }
// console.log(preuTotal)

// 15.2 Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 2. Quin d’aquests sabors vol: 1. Vainilla o Xocolata. No cal afegir res 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor. Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes”. Si totes les dades són correctes, escriurà el preu final.
// let base= prompt("Vols un conus (c) o una terrina (t)?")
// let sabor= prompt("Quin sabor vols? (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles)")
// let preuFinal
// switch (base) {
//     case "c":
//         preuFinal = 3.45
//         break;
//     case "t":
//         preuFinal = 3.95
//         break;
//     default:
//         console.log("Error. Dades mal introduïdes")
// }
// switch (sabor) {
//     case "vainilla":
//         console.log(preuFinal)
//         break;
//     case "xocolata":
//         console.log(preuFinal)
//         break;
//     case "turró":
//         preuFinal = preuFinal + 0.5
//         console.log(preuFinal)
//         break;
//     case "menta":
//         preuFinal = preuFinal + 0.5
//         console.log(preuFinal)
//         break;
//     case "oreo":
//         preuFinal = preuFinal + 0.5
//         console.log(preuFinal)
//         break;
//     case "crema":
//         preuFinal = preuFinal + 1
//         console.log(preuFinal)
//         break;
//     case "gerds":
//         preuFinal = preuFinal + 1
//         console.log(preuFinal)
//         break;
//     case "ametlles":
//         preuFinal = preuFinal + 1
//         console.log(preuFinal)
//         break;
//     default:
//         console.log("Error. Dades mal introduïdes")
// }

// 16.2 Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20.
// for (let n=5; n <= 20; n++) {
//     console.log(n)
// }

// 16.3 Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.
// let n= parseInt(prompt("Introdueix un nombre"))
// let sum= 0
// for (n; n >= 1; n--) {
//     sum += n
// }
// console.log(sum)

// 16.4  Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N. 
// let n= parseInt(prompt("Introdueix nombre"))
// let res= 1
// for (n; n>=1; n--) {
//     res= res*n
// }
// console.log(res)

// 16.5 Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) calculi la suma de tots els números entre N i M (ambdós inclosos).
// let n= parseInt(prompt("Introdueix un nombre"))
// let m= parseInt(prompt("Introdueix un altre nombre més gran que el primer"))
// let sum= 0
// for (n; n <= m; n++) {
//     sum += n
// }
// console.log(sum)

// 16.9 Escriu un programa que donat un número N, escrigui N asteriscos (*)
// let n= parseInt(prompt("Introdueix un nombre"))
// let res= ""
// for (let i=1; i <= n; i++) {
//     res += "*"
// }
// console.log(res)

// 16.10 Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el número introduït sigui 5).
// *
// **
// ***
// ****
// *****
// let n= parseInt(prompt("Introdueix un nombre"))
// let res= ""
// for (let i=1; i <= n; i++) {
//     res += "*"
//     console.log(res)
// }

// 17.1 Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”. 
// let n= 1
// while (n <= 10) {
//     console.log("Estem fent bucles")
//     n++
// }

// 17.2 Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els nombres del 5 al 20.
// let n = 5
// while (n <= 20) {
//     console.log(n)
//     n++
// }

// Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número N donat.
let n = parseInt(prompt("Introdueix un nombre"))
let a = 0
let b = 1
let res = 0
while (res < n) {
    console.log(res)
    res = a + b
    a = b
    b = res
} 