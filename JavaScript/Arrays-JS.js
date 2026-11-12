// Les Arrays o Taules permeten guardar un conjunt de dades que pertanyen a una mateixa variable

// Es poden crear així: 
// let arr = new Array(23,44,67,89) 
// let arr = Array("zero","u","dos")
// let arr = [true,false,false,false,true]
// També es poden crear així:
// let arr = new Array(10)
// let arr = Array(10)
// let arr = []

// Primer element d'una array --> arr[0]

// Afegir dades a una array:
// arr[1] = "Una dada" ; arr[3] = "Una altra dada"
// En aquest cas, arr[2] === undefined (perquè està "buit")

// Consultar dades d'una array:
// let a = arr[2]
// let b = arr[5]

// Esborrar dades d'un element:
// Si let arr = [33,44,52,67,84,65]; i fem --> arr.length = 3; se suprimiran les tres últimes dades se suprimiran

// Propietats i mètodes:
// MÈTODE .length: let taula = [0,1,2,3,4,5] --> taula.length = 6 
// MÈTODE .sort(): let taula = [0,1,2,3,4,5] --> taula.sort(); taula === [5,4,3,2,1,0] (Ordenació de més gran a més petit)
// MÈTODE .indexOf(): let animals = ["camell", "lleo", "tigre", "gat", "zebra"] --> animals.indexOf("lleo") === 1
                                                                              //--> animals.indexOf("lleo", 2) === 4 (comença a contar des de l'índex que li diem)

// Recórrer una array:
// let arr = [4,5,6,78,54,23,94,79]
// for (let i=0; i<taula.length; i++) {Instruccions}

// Buscar a una array: 
// let arr = [4,5,6,78,54,23,94,79];
// let i = 0;
// while (i < taula.length && condició_per_buscar) {instruccions; i++}

// Arrays de dues dimensions:
// let taula = [[10,2,7],[15,34,99]];
// let taula2 = [[33,23,56,23],[23,45,23,55],[45,25,67,88]];
// taula [1][2] === 99
// taula2 [0][3] === 23

// Recórrer una array de dues dimensions:
// for (let i = 0; i < taula.length; i++) {
// for (let j = 0; j < taula[i].length; j++) {Instruccions;}}

// Les cadenes com a arrays: 
// Podem accedir a un determinat caràcter fent servir els claudators [ ] i un índex.
// Però no es pot modificar el contingut d'una string, a diferència d'una array
