// 3.1 Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció
// function tipusNombre (nombre) {
//     let resultat = ""
//     if (nombre % 2 === 0) {
//         resultat = "El nombre és parell"
//     } else {
//         resultat = "El nombre és senar"
//     }
//     return resultat 
// }

// 3.2 Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és.
// function anyTraspas (nombre) {
//     let resultat = ""
//     if (nombre % 4 === 0) {
//         resultat = "L'any és de traspàs"
//     } else {
//         resultat = "L'any no és de traspàs"
//     }
//     return resultat
// }

// 3.3 Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
// function transformaEnter (N) {
//     let sum = 0
//     for(let i = 0; i <= N; i++) {
//         sum += 1 / (i * i)
//     }
//     return sum
// }

// 3.4 Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades.
function notaAlumne (notaAC, notaPRACT, notaEx) {
    let notaFinal = 0
    let notaFinalLletra = ""
    if (notaAC >= 5) {
        notaFinal = 0,2 * notaAC + 0,4 * notaPRACT + 0,4 * notaEx
    } else {
        notaFinal = 0,4 * notaPRACT + 0,6 * notaEx
    }
    if (notaFinal < 5) {
        notaFinalLletra = "D"
    } else if (notaFinal) {

    }
}