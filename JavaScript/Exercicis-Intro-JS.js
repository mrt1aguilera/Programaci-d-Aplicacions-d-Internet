// //8.1 Comparacions
// let a = 5, b = 7;
// let c = 5, d = "5";
// let e1 = a == b;
// let e2 = c == d;
// let e3 = c === d;
// console.log(e1,e2,e3);

// //8.2 Comparacions
//  let a = true;
//  let b = false;
//  let c1 = true === false; 
//  let c2 = true == 1;
//  let c3 = true === 1;
// console.log(c1,c2,c3);

// 8.3 Comparacions
// let a = 10;
// let b = 20;
// console.log(a > b, a < b);

// 8.4 Comparacions
// let a = "Hola";
// let b = "hola";
// let c = "Adéu";
// let d1 = a === b;
// let d2 = a < b;
// let d3 = a < c;
// console.log (d1, d2, d3);

// 8.5 Comparacions 
// let a = 9;
// let b = 7;
// let c = 3;
// let d = a < b < c;
// console.log(d);

// 9.1 Operadors Lògics
// console.log(true && true);
// console.log(true && false);
// console.log(false && (3 == 4));
// console.log(false && true);
// console.log(false && false);
// true i false s'han de tractar com a 1 i 0, respectivament
// && o AND s'ha de tractar com a una multiplicació

// 9.2 Operadors lògics
// console.log(false || false);
// console.log(false || true);
// console.log(false || (3 == 4));
// console.log(true || true);
// console.log(true || false);

// 10.1 Prioritat dels operadors
// let a = 5;
// let b = 10;
// let c = 2;
// a = a + b * c;
// console.log(a);
// let r = a % b + 1;
// let d = c + a / b;
// console.log(d,r);

// 10.2 Prioritat dels operadors
// let a = 5;
// let b = 6;
// let c = 2;
// let d1 = a + b * c;
// let d2 = (a + b) * c;
// let d3 = a - b * c + a / c + 6 % 5;
// console.log (d1,d2,d3);

// 10.3 Prioritat dels operadors
// let e1 = false && false || true;
// let e2 = false || false && true;
// console.log(e1,e2);

// 10.4 Prioritat dels operadors
// let a = 5;
// let b = 4;
// let e1 = a > b || a < b;
// let e2 = a > b && a < b;
// let e3 = e1 || e2;
// let e4 = a <= b + 1 && b - 1 * 5 < 0; 
// console.log (e1,e2,e3,e4);

// 11.1 Operador interrogant
// let a = prompt ("Introdueix un número");
// let b = (a>=18) ? "Ets major d’edat":"No ets major d’edat";
// console.log (b);
// El programa demana a l'usuari un nombre (probablement l'edat) i en funció de si és major o igual a 18, el programa determina si és major o menor d'edat
// L'interrogant actua com a condicional

// 11.2.- Escriu un programa que demani dos números (fent servir la instrucció prompt) i escrigui a la consola qual és el més gran. Fes servir l’operador interrogant (?)
// let a = parseInt(prompt("Introdueix un nombre"));
// let b = parseInt(prompt("Introdueix un altre nombre"));
// let c = (a>b) ? "El primer nombre és més gran":"El segon nombre és més gran";
// console.log(c);

// 11.3.- Escriu un programa que demani dues paraules (fent servir la instrucció prompt) i ens digui si les dues paraules són iguals.
// let a = prompt ("Introdueix una paraula");
// let b = prompt ("Introdueix una altra paraula");
// let c = (a==b) ? "Les dues paraules són iguals":"Les dues paraules són diferents";
// console.log(c);

// 12.1.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt() escrigui a la consola el doble, el triple i el quadrat del número llegit. 
// let numero = parseInt(prompt("Introdueix un nombre"))
// let quadrat = numero * numero
// let cub = quadrat * numero 
// let aLaQuatre = cub * numero 
// console.log(quadrat,cub,aLaQuatre) 

// 12.2.- Fes un programa en JavaScript que calculi el perímetre i l’àrea d’un rectangle de 20 i 80 metres de costat. Modifica el programa perquè els valors dels costats es demanin amb prompt(). 
// let costatsA = parseInt(prompt("Introdueix valor costatsA (80)"))
// let costatsB = parseInt(prompt("Introdueix valor costatsB (20)"))
// let perimetre = 2*costatsA + 2*costatsB
// let area = costatsA * costatsB
// console.log(perimetre,area)

// 12.3 Fes un programa que, donat el radi d’una circumferència, calculi, a una nova variable i escrigui a la consola, la longitud de la circumferència i l’àrea del cercle. Fes servir una constant per guardar el número pi (3,141593) a) Longitud de la circumferència: 2 * 3.1416 * ràdio b) Àrea del cercle: 3.1416 * radio^2
// let radi = parseInt(prompt("Introdueix radi cercle"))
// const pi = 3.141593
// let longitud = 2*pi*radi
// let area = pi*(radi^2)
// console.log(longitud,area)

// 12.4 Escriu un programa en JavaScript que calculi el sou mensual a partir del nombre d’hores treballades (160 hores) i el preu per hora treballada (12€). Prova amb altres valors. 
// let hores = parseInt(prompt("Introdueix hores treballades mensuals"))
// let preuPerH = parseInt(prompt("Introdueix per per hora"))
// let sou = hores*preuPerH 
// console.log(sou) 

// 12.5 Fes un programa en JavaScript que, donades dues variables x i y, intercanviï els seus valores de manera que x acabi tenint el valor de y i y acabi tenint el valor de x. Així, si inicialment tenim: let x = "Hola", y = 3; Quan el programa acabi, x haurà de guardar un 3 i y un “Hola”. 
// let x = prompt("Introdueix valor de x")
// let y = prompt("Introdueix valor de y")
// let aux = x
// x = y
// y = aux