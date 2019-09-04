
const { cons, first, rest, isEmpty, isList } = require('functional-light');

/*
console.log(cons('1',[])); // ['1']
console.log(cons('2', cons('1',[]))); // ['2', '1']
console.log(isList(cons('1',[]))); // TRUE
console.log(isList({length: false })); // false
console.log(isEmpty(cons('1',[]))); // false
console.log(isEmpty([])); // true
console.log(isEmpty(9)); // false
console.log(rest(cons(1, cons(2, [])))); // [2]
console.log(rest([])); // []
console.log(cons(1, [2, 3])); // []

const foo = cons(484, []);
console.log(cons('XX', foo))
console.log(foo); // Debe imprimir [484]    
*/
const miLista = ["a","b","1","2"]

function longitud(miLista){
    if(isEmpty(miLista)){
        return 0;
    }  
    else {
        return 1 + longitud(rest(miLista));
    }
}

console.log(longitud(miLista)); // imprime la cantidad de elemetos de la lista.
console.log(miLista); // imprime la lista creada
console.log(first(miLista)); // imprime el primer elemento de una lista
console.log(isList(miLista)); // indica si es o no es una lista. true - false.
console.log(isEmpty(miLista)); // indica si la lista esta vacia. true - false.
console.log(rest(miLista)); // imprime la lista, menos el primer elemento de la misma.
console.log(cons('c',miLista)); // agregar un elemnto a la posicion 1  de la lista.

console.log(cons(1, [2, 3])); // []
