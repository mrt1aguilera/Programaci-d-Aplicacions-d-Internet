// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula.
// let arr = [] 
// arr[0] = "Hola"
// arr[1] = "Adeu"
// console.log(arr)

// 21.2  Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula.
// let arr = [] 
// arr[0] = "Hola"
// arr[1] = "Adeu"
// arr[2] = "Nom"
// console.log(arr)
// arr[1] = ""
// console.log(arr)

// 21.3 Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?
// let taula = [23,45,98,73]
// let suma = taula[0]+taula[2]
// console.log(suma)
// taula[6] = suma
// console.log(taula) 

// 21.4 Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.
// let numero = parseInt(prompt("Introdueix un nombre"))
// let doble = numero * 2
// let triple = numero * 3
// let arr = [numero,doble,triple]
// console.log(arr) 

// 21.5 Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts.
// let numero = parseInt(prompt("Introdueix un nombre"))
// let numero2 = parseInt(prompt("Introdueix un altre nombre"))
// let suma = numero+numero2
// let resta = numero-numero2
// let multp = numero*numero2
// let divis = numero/numero2
// let arr = [suma,resta,multp,divis]
// console.log(arr) 

// 21.6 Donada la taula: let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78], fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició de la taula.
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let n = taula.length
// console.log(taula[0],taula[n-1])

// 21.7 Donada la taula: let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78], 
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let n = taula.length
// let i = 0
// while (i <= n-1) {
//     console.log(taula[i])
//     i++
// }

// 21.8  Fes un programa que escrigui a la consola la suma tots els valors emmagatzemats a la taula.
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let n = taula.length 
// let i = 0
// let suma = 0
// while (i <= n-1) {
//     suma += taula[i]
//     i++
// }
// console.log(suma)

// 21.9  Fes un programa que crei una segona taula i emmagatzemi a ella tots els valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let n = taula.length 
// let i = 0
// let taula2 = []
// while (i <= n-1) {
//     taula[i] += 25
//     taula2[i] = taula[i]
//     i++
// }
// console.log(taula2)

// 21.10 Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel nombre de valors).
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let mitjana = 0
// let n = taula.length 
// let i = 0
// let suma = 0
// while (i <= n-1) {
//     suma += taula[i]
//     i++
// }
// mitjana = suma/n
// console.log(mitjana) 

// 21.11 Fes un programa que calculi i escrigui a la consola els valors més gran i més petit de la taula
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let n = taula.length
// let i = 0
// let max = taula[0]
// let min = taula[0]
// while (i <= n-1) {
//     if (taula[i] > max) {
//         max = taula[i]
//     }
//     else if (taula[i] < min) {
//         min = taula[i]
//     }
//     i++
// }
// console.log(max,min)

// 21.12 Fes un programa que crei una nova taula on s’emmagatzemin només els valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola. 
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let taula2 = []
// let n = taula.length
// let i = 0
// let j = 0
// while (i <= n-1) {
//     if (taula[i] % 2 === 0) {
//         taula2[j] = taula[i]
//         j++
//     }
//     i++
// }
// console.log(taula2)

// 21.13 Fes un programa que demani a l’usuari un valor (fent servir prompt()) i escrigui a la consola quants cops apareix aquest valor a la taula. 
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78]
// let n = taula.length
// let i = 0
// let num = parseInt(prompt("Introdueix un nombre"))
// let vegades = 0
// while (i <= n-1) {
//     if (num === taula[i]) {
//         vegades++
//     }
//     i++
// }
// console.log(vegades) 

// 21.14 Fes un programa que, donats dos arrays de números, comprovi si tots dos tenen el mateix número d’elements i, si és així, crei una nova taula que contingui la suma de cada element que es trobi a la mateixa posició als dos arrys.
let num1 = parseInt(prompt("Introdueix un nombre"))
let num2 = parseInt(prompt("Introdueix un altre nombre"))
let num3 = parseInt(prompt("Introdueix un altre nombre"))
let num4 = parseInt(prompt("Introdueix un altre nombre"))
let arr1 = [num1,num2]
let arr2 = [num3,num4]
let arr3 = []
let n = arr1.length
let m = arr2.length
let i = 0
if (n === m) {
    
}