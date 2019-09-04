const { cons, first, rest, isEmpty, isList, append, length } = require('functional-light');

const lista1 = [1,2,3,4];
const lista2 = ['a','b','c'];
const lista3 = [1,8,3,10];
const lista4 = [3,2,5,4];
const lista5 = [4,5,1,0,9,4,8,15,12,1];
const lista6 = [1,'a',2,'b',];

//*************************************************************************** 
/*  contrato: lista => numero
    proposito: determinar la cantidad de elementos que hay en una lista.
    ejemplos:   [1,2,3,4] = 4
                ['a','b','c'] = 3
*/

//funcion que retorna la cantidad de elementos de una lista
function longitud(list){ 
   if(isEmpty(list)){
       return 0;
   }  
   else {
       return 1 + longitud(rest(list));
   }
}
//console.log(longitud(lista1)); // 4
//console.log(longitud(lista2)); // 3


//***************************************************************************
/*  contrato: lista => numero
    proposito: obtener el numero mayor de una lista ordenada/desordenada.
    ejemplos:   [1,2,3,4] = 4
                [1,8,3,10] = 10
*/

// 1. Encuentre el mayor valor de una lista de números
function numeroMayor(list){
    if (longitud(list)==1){
        return first(list);
    }
    else {
        if (first(list) <= first(rest(list))){
            return numeroMayor(rest(list));
        }
        else {
            return numeroMayor(cons(first(list), rest(rest(list))));
        }
    }
}
//console.log(numeroMayor(lista1)); // 4
//console.log(numeroMayor(lista3)); // 10

//***************************************************************************
/*  contrato: lista => numero
    proposito: obtener la suma de todos los numeros de una lista.
    ejemplos:   [1,2,3,4] = 10
                [1,8,3,10] = 22
*/

// 2.1 funcion que retorna la suma de los numeros de una lista.
function suma(list){
    if(isEmpty(list)){
        return 0;
    }
    else {
        return suma(rest(list)) + first(list);
    }
}

/*  contrato: numero => numero
    proposito: obtener el promedio de una suma de numeros.
    ejemplos:   [1,2,3,4] = 10/4
                [1,8,3,10] = 22/4
*/

// 2. Encuentre el promedio de los valores de la lista
function promedio(list){
    return suma(list)/longitud(list);
} 
//console.log(promedio([1,2,3,4])); // 10/4 = 2.5
//console.log(promedio([1,8,3,10])); // 22/4 = 5.5

//***************************************************************************
/*  contrato: lista => lista
    proposito: obtener el ultimo elemento de una lista.
    ejemplos:   [1,2,3,4] = 4
                ['a','b','c'] = 'c'
*/

// funcion que retorna el ultimo elemento de la lista.
function last(list){
   if (longitud(list)==1){
       return first(list);
   }
   else {
       return last(rest(list));
   }
}
//console.log(last([1,2,3,4])); // 4
//console.log(last(['a','b','c'])); // c

/*  contrato: lista => lista
    proposito: obtener la lista sin el ultimo elemento de la misma.
    ejemplos:   [1,2,3,4] = [1,2,3]
                ['a','b','c'] = ['a','b']
*/

// funcion que retorna la lista sin el ultimo elemento de misma.
function deleteLast(list){
   if (longitud(list)==1){
       return [];
   }
   else {
       return  (cons (first(list), deleteLast(rest(list))) );
   }
}
//console.log(deleteLast(lista1)); // [1,2,3]
//console.log(deleteLast(lista2)); // ["a","b"]

/*  contrato: lista => lista
    proposito: invertir el orden de una lista de elementos.
    ejemplos:   [1,2,3,4] = [4,3,2,1]
                [1,8,3,10] = [10,3,8,1]
*/

// 3. funcion que invierte el orden de una lista.
function invertir(list){
    if (longitud(list)==0){
        return [];
    }

    else {
        return cons(last(list), invertir(deleteLast((list))));
    }
}
//console.log(invertir([1,2,3,4])); // [4,3,2,1]
//console.log(invertir([1,8,3,10])); // [10,3,8,1]
//console.log(invertir([1,2,3,4,"a","b","c"]));

//***************************************************************************
/*  contrato: lista, lista => lista
    proposito: unir dos listas con elementos.
    ejemplos:   [1,2,3,4] = [1,2,3,4,"a","b","c"]
                [1,8,3,10] = [1,2,3,4,1,8,3,10]
*/

// funcion que une dos listas.  REVISAR SALIDA.
function unirListas(l1, l2){
    if (isEmpty(l1)){
       return l2;
    }
    else {
       return cons(first(l1), unirListas(rest(l1), l2));
    }
 }
 //console.log(unirListas([1,2,3,4], ["a","b","c"])); // [1,2,3,4,"a","b","c"]
 //console.log(unirListas([1,2,3,4], [1,8,3,10]));    // [1,2,3,4,1,8,3,10]

//***************************************************************************
/*  contrato: lista => numero
    proposito: funcion que permite extraer el numero menor de una lista.
    ejemplos:   [1,2,3,4] = 1
                [3,2,5,4] = 2
*/

// funcion que permite extraer el numero menor de una lista.
function numeroMenor(list){
    if (longitud(list)==1){
        return first(list);
    }
    else {
        if (first(list) >= first(rest(list))){
            return numeroMenor(rest(list));
        }
        else {
            return numeroMenor(cons(first(list), rest(rest(list))));
        }
    }
}
//console.log(numeroMenor([1,2,3,4])); // 1
//console.log(numeroMenor([3,2,5,4])); // 2
//console.log(numeroMenor([3,2,5,4,1,1])); // 1

//***************************************************************************
/*  contrato: lista => lista
    proposito: funcion que elimina el numero menor de una lista.
    ejemplos:   [1,2,3,4] = 1
                [3,2,5,4] = 2
*/

// funcion que elimina el numero menor de una lista.
function deleteMenor(list){
    if (numeroMenor(list) == first(list)){
        return rest(list);
    }
    else {
        return cons(first(list), deleteMenor(rest(list)));
    }
}
//console.log(deleteMenor([1,2,3,4,])); // [2,3,4]
//console.log(deleteMenor([3,2,5,4])); // [3,5,4]

//***************************************************************************
/*  contrato: lista => lista
    proposito: ordenar los elementos de la lista de manera ascendente.
    ejemplos:   ([1,8,3,10])); // [1,3,8,10]
                [3,2,5,4] = 2
                  [3,2,5,4])); //  [2,3,4,5]
*/

// 4. Ordene de manera ascendente una lista.
function ordenar(list){
    if (longitud(list) == 0){
        return  [];
    }
    else {
        return cons(numeroMenor(list), ordenar(deleteMenor(list)));
    }
}
//console.log(ordenar([1,8,3,10])); // [1,3,8,10]
//console.log(ordenar([3,2,5,4])); //  [2,3,4,5]
//console.log(ordenar([4,5,1,0,9,4,8,15,12,1])); // REVISAR SALIDA.

//***************************************************************************
/*  contrato: numero => numero
    proposito: mostrar el n-esimo termino de la serie fibonacci.
    ejemplos:   [3] = 1
                [5] = 3
                [10] = 55
*/

// funcion que retorna el n-esimo termino fibonacci.
function Fibonacci(numero){
    if (numero<2 && numero >= 0){
        return numero;
    }
    else {
        return Fibonacci (numero-1) + Fibonacci (numero-2);
    } 
}
//console.log(Fibonacci(2));  // 1
//console.log(Fibonacci(5));  // 5
//console.log(Fibonacci(10)); // 55

/*  contrato: numero => lista
    proposito: construir una lista hasta el n-esimo termino de la 
               serie fibonacci.
    ejemplos:   [3] = [1,1,2]
                [5] = [1,1,2,3,5]
                [6] = [1,1,2,3,5,8]
*/

// 5. Funcion que retorna los n primeros terminos de la serie Fibonacci. 
function listaFibonacci(num){
    if (num < 2 && num >= 0){   
        return [Fibonacci(num)];
    }
    return unirListas(listaFibonacci(num-1), [Fibonacci(num)]);
}
//console.log(listaFibonacci(3));  // 1,1,2
//console.log(listaFibonacci(5));  // 1,1,2,3,5
//console.log(listaFibonacci(6));  // 1,1,2,3,5,8


//***************************************************************************
/*  contrato: lista => lista
    proposito: extraer todos los elementos que son numeros de una lista.
    ejemplos:   [1,'a',2,'b',7] = [1,2,7]
                ['a',5,'b',9,'c',0,6] = [5,9,0,6]
*/

// 6. Dada una lista, eliminar todos los elementos que no sean números
function extraerNumeros(list){
    if (isEmpty(list)){
        return [];
    }
    else {
        if (first(list) <= 0 || first(list) >0){
            return cons(first(list), extraerNumeros(rest(list)));
        }
        else {
            return cons(first(rest(list)), extraerNumeros(rest(rest(list))));
        }
    }
}
//console.log(extraerNumeros([1,'a',2,'b',7])); // [1,2,7]
//console.log(extraerNumeros(['a',5,'b',9,'c',0,6])); // [5,9,0,6]

//***************************************************************************
/*  contrato: caracter, numero, lista => lista
    proposito: insertar un elemento x en una posicion n de una lista.
    ejemplos:   (5, 2, [1, 2, 3, 4]) = [1, 2, 5, 3, 4]
                ('a', 4, [1, 2, 3, 4]) = [1, 2, 3, 4, 'a']
*/

// 7. Implemente una función que inserta un elemento x en la 
// posición n de la lista, sin está entre 0 y el (longitud lista).
// No hace nada en caso contrario.
    
function insertarElemento(elemento, posicion , list){
    if(posicion > longitud(list)){
        return [];
    }
    else {
        if(posicion == 0){
            return cons(elemento, list);
        }
        else {
            return cons(first(list), insertarElemento(elemento, posicion-1, rest(list)));
        }
    }
}
//console.log(insertarElemento(5, 2, [1, 2, 3, 4]))
//console.log(insertarElemento('a', 4, [1, 2, 3, 4]))

//***************************************************************************
/*  contrato: lista, caracter => numero
    proposito: encontrar la posicion de un elemento en una lista.
    ejemplos:   ([1,2,3,4,5,6], 7) = El el elemento no existe.
                ([2,4,6,8,10], 8)) = 3
*/

// 8. funcion que retorna la posicion de un elemento.
function posicionElemento(list, numero){
    if (isEmpty(list)){
      return [];
    }
    else {
        if(first(list) == numero){
            return 0;
        }
        else {
            if (perteneceSiNo(list, numero) == false){
                return "El elemento no existe!"
            }
            return posicionElemento(rest(list), numero) + 1;
        }
    }
}
//console.log(posicionElemento([1,2,3,4,5,6], 7)); // El elemento no existe.
//console.log(posicionElemento([2,4,6,8,10], 8)); // 3

//***************************************************************************
/*  contrato: lista, numero => lista
    proposito: insertar un numero en una lista que siempre esta ordenada
    ejemplos:   ([1,2,3,4,5,6], 4) = [1,2,3,4,4,5,6]
                ([2,4,6,8,10], 9)) = [2,4,6,8,9,10]
*/

// 9.Implemente una función que inserta datos en una lista que siempre está ordenada.
function insertarNumero(list, numero){
    if(isEmpty(list)){
        return [];
    }
    else {
        if(first(list) >= numero){
            return cons(numero, list);
        }
        else {
            return cons(first(list), insertarNumero(rest(list), numero));
        }
    }
}
//console.log(insertarNumero([1,2,3,4,5,6], 4)); // [1,2,3,4,4,5,6]
//console.log(insertarNumero([2,4,6,8,10], 9)); // [2,4,6,8,9,10]

//***************************************************************************
/*  contrato: lista, numero => booleano
    proposito: encontrar un elemento dado en una lista.
    ejemplos:   ([1,2,5,4,6], 2) = true
               ([1,2,5,4,6], 0) = false
*/

// 10. Implemente una función que busca un elemento en una lista desordenada
function perteneceSiNo(list, numero){
    if (isEmpty(list)){
        return false;
    }
    else {
        if (first(list) == numero){
            return true;
        }
        else {
            return perteneceSiNo(rest(list), numero)
        }
    }
}
//console.log(perteneceSiNo([1,2,5,4,6], 2)); // true
//console.log(perteneceSiNo([1,2,5,4,6], 0)); // false

//***************************************************************************
/*  contrato: lista, elemento => lista
    proposito: eliminar el elemento dado de un lista.
    ejemplos:   ([1,2,3,4,5], 2) = [1,3,4,5]
               (['a','b','c','e'], 'e') = ['a','b','c']
*/

// 11. Implemente una función que elimina el elemento n de la lista
function eliminar(list, elemento) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        if (first(list) == elemento) {
            return (rest(list));
        }
        else {
            return cons(first(list), eliminar(rest(list), elemento));
        }
    }
}
//console.log(eliminar([1,2,3,4,5], 2)); // [1,3,4,5]
//console.log(eliminar(['a','b','c','e'], 'e')); // ['a','b','c']

//***************************************************************************
/*  contrato: lista, numero => booleano
    proposito: encontrar un elemento dado en una lista.
    ejemplos:   ([1,2,3,4,5], 2) = true
               ([2,4,6,8,10], 5) = false
*/

// 12. Implemente la función de búsqueda sobre una lista ordenada.
function buscarElemento(list, numero){
    if (isEmpty(list)){
        return false;
    }
    else {
        if (first(list) == numero){
            return true;
        }
        else {
            return buscarElemento(rest(list), numero)
        }
    }
}
//console.log(buscarElemento([1,2,3,4,5], 2)); // true
//console.log(buscarElemento([2,4,6,8,10], 5)); // false

//***************************************************************************
/*  contrato: lista, numero => lista
    proposito: extraer los numeros mayores de una lista que un cierto numero dado.
    ejemplos:   ([1,2,3,4,5], 3) = [4,5]
               ([2,4,6,8,10], 4) = [6,8,10]
*/

// 13. Implemente una función que busca todos los números mayores que un cierto
//     valor x. La función debe retornar una lista con los elementos encontrados.
function extNumMayores(list, numero){
    if (longitud(list) == 0){
        return [];
    }
    else {
        if (first(list) > numero){
            return cons(first(list), extNumMayores(rest(list), numero));
        }
        else {
            if (first(list) <= numero){
                return extNumMayores(rest(list), numero);
            }
        }
    }
}
//console.log(extNumMayores([1,2,3,4,5], 3)); // [4,5]
//console.log(extNumMayores([2,4,6,8,10], 4)); // [6,8,10]

//***************************************************************************
/*  contrato: lista, numero => lista
    proposito: extraer elementos con una condicion dada, por ejemplo los 
               numero pares de una lista.

    ejemplos: ([1,2,3,4,5,6,7,10], 2) = [2,4,6,10] => extrae los numeros pares.
              ([2,4,3,8,12,20,9], 3) = [3,12,9] => extrae los divisibles entre 3.
*/

// 14. Implemente una función que busca todos los elementos de una lista que
// cumplen una cierta condición, por ejemplo, los números que sean pares. La
// función debe retornar una lista con los elementos encontrados

function extraerElementos(list, numero){
    if (isEmpty(list)){
        return [];
    }
    else {
        if (first(list)%numero == 0){
            return cons(first(list), extraerElementos(rest(list), numero));
        }
        else {
            return extraerElementos(rest(list), numero);
        }
    }
}
//console.log(extraerElementos([1,2,3,4,5,6,7,10], 2)); // [2,4,6,10] 
//console.log(extraerElementos([2,4,3,8,12,20,9], 3)); // [3,12,9] 

//***************************************************************************
/*  contrato: lista, numero => lista
    proposito: aplicar una funcion a todos los elmentos de una lista dada con
               un parametro dado, por ejemplo elevar al cuadrado cada numero.

    ejemplos: ([1,2,3,4], 2) = [1,4,9,16] => elevados al cuadrado.
              ([2,4,3,5], 3) = [8,64,27,125] => elevados al cubo.
*/

// 15. funcion (map) que se aplica a cada elemento de una lista.
function map(list, numero){
    if (longitud(list)==0){
        return [];
    }
    else{
        return cons(Math.pow(first(list), numero), map(rest(list), numero));
    }
}
//console.log(map([1,2,3,4], 2)); // [1,4,9,16] 
//console.log(map([2,4,3,5], 3)); // [8,64,27,125] 

/*
=====================================================================
...tratando de hacer una funcion para numeros complejos.

const i='i';
function raizCompleja(numero, indice, i){
    if (numero<0){  
        return Math.sqrt((-1)*(numero), indice)*i;
    }
    else{
        return Math.sqrt(numero, indice)
    }
}
console.log(raizCompleja(-4,2,i));
console.log(raizCompleja(4,2));
console.log(2*'a');
=====================================================================
*/

/*
console.log(Math.ceil(11/3)) // Math.ceil aproxima el resultado por encima.
console.log(Math.ceil(12/5))
console.log(Math.ceil(9/3))
*/

//===================================================================================
// ejemplo: funcion que calcula la distancia entre dos puntos (x1,y1);(x2,y2).
// el parametro se envia como el arreglo de dos objetos ({x:0, y:0}, {x:3, y:4})
// forma de acceder a un atributo: (puntos.p1.x1 = 0; puntos.p2.y2 = 4)

const puntos = { p1:{x1:0, y1:0}, p2: {x2:3, y2:4} };

function distancia (puntos){
    return Math.sqrt(Math.pow(puntos.p1.x1 - puntos.p2.x2, 2) + Math.pow(puntos.p1.y1 - puntos.p2.y2, 2));
}
//ejemplo
//console.log("La distancia es: ", distancia(puntos), "unidades."); // salida = 5

// para cambiar el valor de un atributo de un objeto.
// se construye un nuevo objeto y se accede a los atributos del aobjeto anterior
// y se cambian los valores de los atributos.

const puntos1 = {p1: {x1:puntos.p1.x1+2, y1:puntos.p1.y1+2}, p2: {x2:puntos.p2.x2+1, y2:puntos.p2.y2+1}}

//console.log("La distancia es: ", distancia(puntos1), "unidades."); // salida = 5


//===================================================================================


//*****************************************************************************************
// http://processingjs.org/articles/p5QuickStart.html
/*
 * perimetro: Object => Number
 * FUnciÃ³n que calcula el perimetro de un rectÃ¡ngulo. Los vertices del rectÃ¡ngulo 
 * estÃ¡n especificados como un arreglo de objetos {x,y}
 * Ejemplo: perimetro({puntos: [{ x:0, y:0 }, { x:10, y:0 }, { x:10, y:10 }, { x:0, y:10}], color: "blue"}); // => 40
 */

function perimetro(rect) {
    return perimetroPoligono(append(rect.puntos, first(rect.puntos)));
}

//console.log(perimetro({puntos: [{ x:0, y:0 }, { x:10, y:0 }, { x:10, y:10 }, { x:0, y:10 }], color: "blue"}) === 40);

//*****************************************************************************************
/**
 * l2: Object{x,y}, Object{x,y} => Number
 * Calcula la distancia L2 entre 2 puntos {x,y} 
 */

function l2(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
//console.log(l2({ x:1, y:1 }, { x:5, y:4 }) === 5);

//*****************************************************************************************
/*
 * perimetroPoligono: List => Number
 * Esta funciÃ³n calcula el perimetro de una lista de puntos {x,y}
 */

function perimetroPoligono(pol) {
  if (length(pol) === 2) {
    return l2(first(pol), first(rest(pol)));
  } 

  else {
    return l2(first(pol), first(rest(pol))) + perimetroPoligono(rest(pol));
  }
}
//console.log(perimetroPoligono([{ x:0, y:0 }, { x:10, y:0 }, { x:10, y:10 }, { x:0, y:10 }, { x:0, y:0 }]) === 40)

//*****************************************************************************************
/*
 * isInside: Object{p0, p1}, Object{x,y} => boolean
 * Verifica si el punto p se encuentra dentro del rectangulo rect
 * Ejemplo: 
 * isInside({p0: {x: 1, y: 1}, p1: {x: 2, y: 3}}, {x: 0, y: 0}) => false
 * isInside({p0: {x: 1, y: 1}, p1: {x: 2, y: 3}}, {x: 2, y: 2}) => true
 */

 
function isInside(rect, p) {
    // compara al punto (x,y) si estan entre el rango de los otros dos puntos.
    return (p.x >= rect.p0.x) && (p.x <= rect.p1.x) && (p.y >= rect.p0.y) && (p.y <= rect.p1.y);
}

//console.log(isInside({ p0: { x:1, y:1 }, p1: { x:2, y:3 } }, { x:0, y:0 }) == false);
//console.log(isInside({ p0: { x:1, y:1 }, p1: { x:2, y:3 } }, { x:2, y:2 }));

//*****************************************************************************************

function mcdStructural(n, m) {

    function primerdivisor(i) {
        if (i == 1) {
            return 1;
        }
        else {
            if (remainder(n, i) == 0 && remainder(m, i) == 0) {
                return i;
            }
            else {
                return primerdivisor(i - 1);
            }
        }
        return primerdivisor(min(n, m));
    }
}

function mcd(x, y) {
    if (y == 0) {
        return x;
    }
    else {
        return mcd( y, (x % y));
    }
}

var gcd = function(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

function time() {
    var today = new Date();
    return today.getTime();
}
//console.log(gcd(18, 24));

var initio = time();
/*
console.log(gcd(101135743298743298749878539393935354874874387,4998498984324340984320984320988459845984598459850146408383838));
console.log(gcd(18, 24));
console.log(time()-initio);
console.log(gcd(101135853,45014640));
console.log(gcd(1032,180));    
*/

function time() {
    var today = new Date();
    return today.getTime();
}

function itemsmayores(list, pivote) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        if (first(list) >= pivote) {
            return cons(first(list), itemsmayores(rest(list), pivote));
        } else {
            return itemsmayores(rest(list), pivote);
        }

    }
}

function intemsmenores(list, pivote) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        if (first(list) < pivote) {
            return cons(first(list), intemsmenores(rest(list), pivote));
        } else {
            return intemsmenores(rest(list), pivote);
        }

    }
}

function quicksort(list) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        return append(quicksort(intemsmenores(rest(list), first(list))),
            append([first(list)], quicksort(itemsmayores(rest(list), first(list)))));
    }

}

function sortRecursionStructural(list) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        return insert(first(list), sortRecursionStructural(rest(list)));
    }
}

function insert(n, list) {
    if (isEmpty(list)) {
        return cons(n, []);
    }
    else {
        if (n >= first(list)) {
            return cons(n, list);
        }
        else {
            return cons(first(list), insert(n, rest(list)));
        }
    }
}

/*
var initio = time();
console.log(sortRecursionStructural([1,2,3,4,5,7,8,9,9,0,2,2,3,4,5,6,7,8,9,9,0,1])); //recursion estructurada
console.log( ("tiempo estructural: "), time()-initio);

var initio = time();
console.log(quicksort([1,2,3,4,5,7,8,9,9,0,2,2,3,4,5,6,7,8,9,9,0,1])); // recursion generativa·
console.log( ("tiempo generativo: "), time()-initio);

var initio = time();
let dd = ((new Array(100))).fill(2).map(x => {return Math.round(Math.random()* 100)});
console.log(sortRecursionStructural(dd)); // recursion estructurada
console.log( ("tiempo estructural: "), time()-initio);

var initio = time();
ee = ((new Array(100))).fill(2).map(x => {return Math.round(Math.random()* 100)});
console.log(quicksort(ee)); // recursion generativa·
console.log( ("tiempo generativo: "), time()-initio);

// 1. a. muestra la lista de entrada.
console.log(quicksort([1,1,1])); // salida: [1,1,1]

// 1. b. muestra todos lo elementos de la lista de menor a mayor.
console.log(quicksort([1,2,3,4,5,7,8,9,9,0,2,2,3,4,5,6,7,8,9,9,0,1])); 
// salida: [0,0,1,1,2,2,2,3,3,4,4,5,5,6,7,7,8,8,9,9,9,9]

// 1. c. muetra todos los elementos ordenados de mayor a menor.
console.log(sortRecursionStructural([1,4,2,3])); // salida: [ 4,3,2,1 ]

// 1. d. genera un arreglo de tamaño (100 elementos, numeros enteros)
puntoD = ((new Array(100))).fill(2).map(x => { return Math.round(Math.random()*100) });

// 1. e. muestra los 100 numeros generados aleartoriamente.
console.log(quicksort(puntoD)); 
    
// 1. f. salida: 100 (elementos de la lista)
console.log(length(quicksort(dd)));

// 2. a. genera un arreglo de 500 numeros enteros.
var initio = time();
punto2a = ((new Array(500))).fill(2).map(x => { return Math.round(Math.random()*500) });
console.log(sortRecursionStructural(punto2a)); 
console.log( ("tiempo estructural: "), time()-initio);

var initio = time();
punto2a2 = ((new Array(500))).fill(2).map(x => { return Math.round(Math.random()*500) });
console.log(quicksort(punto2a2)); 
console.log( ("tiempo generativo: "), time()-initio);

// 2. b. genera un arreglo de 1000 numeros enteros.
var initio = time();
punto2b = ((new Array(1000))).fill(2).map(x => { return Math.round(Math.random()*1000) });
console.log(sortRecursionStructural(punto2b)); 
console.log( ("tiempo estructural: "), time()-initio);

var initio = time();
punto2b2 = ((new Array(1000))).fill(2).map(x => { return Math.round(Math.random()*1000) });
console.log(quicksort(punto2b2)); 
console.log( ("tiempo generativo: "), time()-initio);

// 2. c. genera un arreglo de 10000 numeros enteros.
var initio = time();
punto2c = ((new Array(10000))).fill(2).map(x => { return Math.round(Math.random()*10000) });
console.log(sortRecursionStructural(punto2c)); 
console.log( ("tiempo estructural: "), time()-initio);

var initio = time();
punto2c2 = ((new Array(10000))).fill(2).map(x => { return Math.round(Math.random()*10000) });
console.log(quicksort(punto2c2)); 
console.log( ("tiempo generativo: "), time()-initio);

// 2. d. genera un arreglo de 100.000 numeros enteros.
var initio = time();
punto2d = ((new Array(100000))).fill(2).map(x => { return Math.round(Math.random()*100000) });
console.log(sortRecursionStructural(punto2d)); 
console.log( ("tiempo estructural: "), time()-initio);

var initio = time();
punto2d2 = ((new Array(100000))).fill(2).map(x => { return Math.round(Math.random()*100000) });
console.log(quicksort(punto2d2)); 
console.log( ("tiempo generativo: "), time()-initio);
*/

/*
taller lista con estructuras.

Suponga que usted tiene una colección de música en su computador y quiere indexarla
con un programa en JavaScript. Cada canción de su colección puede ser descrita por
un nombre, un álbum, el artista, la duración en segundos de la pista y número de
estrellas que usted les ha asignado(Entre 1 y 5).

*/
//*************************************************************************************************
//1. Definir la estructura que almacena cada canción

let canciones = {nom:"", art:"", alb:"", dur:"", cal:""}
//*************************************************************************************************

//2. Crear 10 instancias con sus canciones favoritas

canciones = [{nom:"Paranoid", art: "Black Sabbath", alb:"Live at last", dur:172, cal:4},
            {nom:"Du hast", art: "Rammstein", alb:"Sehnsucht", dur:260, cal:5},
            {nom:"Steel", art: "Pegboard nerds", alb:"Full Hearts", dur:258, cal:3},
            {nom:"Head of Nasa", art: "Infected Mushroom", alb:"Head of Nasa", dur:465, cal:2},
            {nom:"Conquer or die", art: "Megadeth", alb:"Dystopia", dur:214, cal:4},
            {nom:"Somebody to love", art: "Queen", alb:"A day at the Races", dur:309, cal:5},
            {nom:"Blues boys tune", art: "B.B King ", alb:"Blues on the Bayau", dur:442, cal:4},
            {nom:"Like a stone", art: "Audioslave", alb:"Like a stone", dur:308, cal:5},
            {nom:"One", art: "Metallica", alb:"Justice for all", dur:446, cal:1},
            {nom:"Beat it", art: "Michael Jackson", alb:"Thriller 25", dur:298, cal:1}]

//console.log(canciones); 

/*
Ahora suponga que usted quiere guardar sus canciones favoritas como una lista de
reproducción en JavaScript (lista de objetos). Para esta lista de canciones implemente
las siguientes funciones:
*/
//*************************************************************************************************
//1. Búsqueda de canciones por nombre de canción. Debe retornar una canción o
//   vacío en caso de no encontrarla.

/*  contrato: string, lista => objeto
    proposito: buscar una cancion en la lista de canciones por un nombre dado.

    ejemplos: ('Like a stone', canciones) = nom: 'Like a stone',
                                            art: 'Audioslave',
                                            alb: 'Like a stone',
                                            dur: 308,
                                            cal: 5
*/

function buscarCancion (cancion, lista){
    if (longitud(lista) == 1 && nombre != first(lista).nom){
        return "La cancion no existe."
    }
    else {
        if (cancion == first(lista).nom){
            return first(lista);
        }
        else {
            return buscarCancion(cancion, rest(lista));
        }
    }
}
//console.log(buscarCancion('One', canciones));
//console.log(buscarCancion('Paranoid', canciones));

//*************************************************************************************************
//2. Búsqueda de canciones por arista.

/*  contrato: string, lista => lista 
    proposito: buscar una cancion por nombre de artista en la lista.

    ejemplos: ('Metallica', canciones) = nom: 'One',
                                         art: 'Metallica',
                                         alb: 'Justice for all',
                                         dur: 446,
                                         cal: 1
*/

function buscarArtista(artista, lista){
    if (longitud(lista) == 1 && artista != first(lista).art){
        return "El artista no existe."
    }
    else {
        if (artista == first(lista).art){
            return first(lista);
        }
        else {
            return buscarArtista(artista, rest(lista));
        }
    }
}
//console.log(buscarArtista('Audioslave', canciones));
//console.log(buscarArtista('Metallica', canciones));

//*************************************************************************************************
//3. Duración de la lista de reproducción en el formato “horas:minutos:segundos”
/*  contrato: lista => numero
    proposito: calcular la duracion de la lista de reproduccion de las canciones.

    ejemplos: canciones :   172 + 260 + 258 + 258 + 465 + 465 + 214 + 309 + 
                            442 + 308 + 446 + 298 = 3172 
                      
*/

function duracionTotal(lista){
    if (isEmpty(lista)){
        return 0;
    }
    else {
        return first(lista).dur + duracionTotal(rest(lista));
    }
}
//console.log(duracionTotal(canciones)); // 3172

// Funcion auxiliar para mostra formato de HMS de la duracion de las canciones.
function formatoHMS(tiempo){
    return console.log("Duracion:",Math.floor(tiempo/3600),
    ":", Math.floor(tiempo/60), ":", Math.floor((tiempo/3600)*10));
}

//formatoHMS(duracionTotal(canciones));

//*************************************************************************************************
//4. Todas las canciones con al menos menos de 2 estrellas
/*  contrato: lista => lista
    proposito: mostrar una lista con las canciones que tienen 2 o menos estrellas
               (calificacion) de la lista de reproduccion de canciones.

    ejemplos: canciones :   canciones = Head of Nasa
                                        One 
                                        Beat it.
                      
*/

function  calificacion2(lista){
    if (isEmpty(lista)){
        return [];
    }
    else {
        if (first(lista).cal <= 2){
            return cons(first(lista), calificacion2(rest(lista)));
        }
        else {
           return calificacion2(rest(lista));
        }
    }
}
//console.log(calificacion2(canciones));

//*************************************************************************************************
//5. Todas las canciones con de 5 estrellas
/*  contrato: lista => lista
    proposito: mostrar una lista con las canciones que tienen 5 estrellas

    ejemplos: canciones : = Du hast
                            Somebody to love
                            ike a stone
                      
*/

function  calificacion5(lista){
    if (isEmpty(lista)){
        return [];
    }
    else {
        if (first(lista).cal == 5){
            return cons(first(lista), calificacion5(rest(lista)));
        }
        else {
           return calificacion5(rest(lista));
        }
    }
}
//console.log(calificacion5(canciones));

//*************************************************************************************************
//6. Imprima los títulos de las canciones y su duración.
/*  contrato: lista => lista
    proposito: construir una lista con los nombres de la canciones y su duracion.

    ejemplos: canciones : = [ 'Paranoid', 172 ],
                            [ 'Du hast', 260 ],
                            [ 'Steel', 258 ],
                            [ 'Head of Nasa', 465 ],
                            [ 'Conquer or die', 214 ],
                            [ 'Somebody to love', 309 ],
                            [ 'Blues boys tune', 442 ],
                            [ 'Like a stone', 308 ],
                            [ 'One', 446 ],
                            [ 'Beat it', 298 ]
                      
*/

function imprimirNomDur (list){
    if (isEmpty(list)){
        return [];
    }
    else {
        return cons(append([first(list).nom], [first(list).dur]), imprimirNomDur(rest(list)));
    }
}
//console.log(imprimirNomDur(canciones))

//*************************************************************************************************
// 7. Crear la lista de mejor a peor canción
/*  contrato: lista => lista
    proposito: construir una lista en orden ascendente con la calificacion 
                de mejor cancion a peor cancion.

    ejemplos: canciones : = [ 'Du hast', 5],
                            [ 'Somebody to love', 5],
                            [ 'Like a stone, 5 ],
                            [ 'Paranoid', 4 ],
                            [ 'Conquer or die', 4],
                            [ 'Blues boys tune', 4 ],
                            [ 'Steel', 3 ],
                            [ 'Head of Nasa', 2 ],
                            [ 'One', 1 ],
                            [ 'Beat it', 1 ]    
*/

function ordenAsc(list){
    if (longitud(list) == 0){
        return  [];
    }
    else {
        return cons(append([menorCal(list).nom], [menorCal(list).cal]), ordenAsc(deleteMenorCal(list)));
    }
}
//console.log(ordenAsc(canciones));

// funcion que retorna la cancion con menor calificacion.
function menorCal(list){
    if (longitud(list) == 1){
        return first(list);
    }
    else {
        if (first(list).cal < first(rest(list)).cal){
            return menorCal(rest(list));
        }
        else {
            return menorCal(cons(first(list), rest(rest(list))));
        }
    }
}
//console.log(menorCal(canciones));

// funcion que elimina la menor calificacion de una lista.
function deleteMenorCal(list){
    if (menorCal(list).cal == first(list).cal){
        return rest(list);
    }
    else {
        return cons(first(list), deleteMenorCal(rest(list)));
    }
}
//console.log(deleteMenorCal(canciones));

//*************************************************************************************************
// 8.  Eliminar la n-ésima canción

/*  contrato: lista, numero => lista
    proposito: eliminar la n-esima cancion de la lista canciones.

    ejemplos: (canciones, 10) = [ 'Du hast', 5],
                                [ 'Somebody to love', 5],
                                [ 'Like a stone, 5 ],
                                [ 'Paranoid', 4 ],
                                [ 'Conquer or die', 4],
                                [ 'Blues boys tune', 4 ],
                                [ 'Steel', 3 ],
                                [ 'Head of Nasa', 2 ],
                                [ 'One', 1 ],   
*/

function eliminarCancion(lista, posicion){
    if (isEmpty(lista)) {
        return [];
    }
    else {
        if (posicion == 0) {
            return (rest(lista));
        }
        else {
            return cons(first(lista), eliminarCancion(rest(lista), posicion-1));
        }
    }
}
//console.log(eliminarCancion(canciones, 9));



//****************************************************************************************************************/
//****************************************************************************************************************/
// juego de programadores y novatos 2 FDP
// lo que este en // son recomendaciones 
//hacer swap.
/**
 contrato: lista => cadena de carateres.
 proposito: recibir una lista  de listas, y retornar una cadena con los
            elementos de la lista.
ejemplo:    ["+", 5, ["/", 20, 10]] =>  + 5 / 20 10
 */

// funcion para hacer la notación prefija
function str2inorder(array){
    //hacer un split de un array 
    //usar map, reduce o filter para crear un array
    if(isList(array)){
        return array[0] + " " + str2inorder(array[1]) + " " + str2inorder(array[2])
    }
    else{
        return array;
    }
}

/*
console.log("String 1: ", str2inorder(["+", 5, ["/", 20, 10]])) // salida: + 5 / 20 10
console.log("String 2: ", str2inorder(["/", ["+", 5, 20], 10])) // / + 5 20 10
console.log("String 3: ", str2inorder(["+", ["+", 5, ["-", 4, 2]], ["+", ["*", 2, 2], ["+", 3, 1]]])) // + + 5 - 4 2 + * 2 2 + 3 1
console.log("String 4: ", str2inorder(["-", 1, ["+", 2, ["/", 4, 2]]])) // - 1 + 2 / 4 2
*/

/*
cotrato: cadena de caracteres => numero
proposito: realizar las operaciones en notacion prefija para
            retornar el valor total.
ejemplo:    + 5 / 20 10 => 7
*/

function eval(string){
    // evalue operador, operando, operando
    // recuerde que para evaluar una notación infija (inorder) se debe hacer de manera posfija (posorden)
    if(isList(string)){
        switch(string[0]){
            case '+':
                return eval(string[1]) + eval(string[2]);
                break;

            case '-':
                return eval(string[1]) - eval(string[2]);
                break;

            case '*':
                return eval(string[1]) * eval(string[2]);
                break;
            
            case '/':
                return eval(string[1]) / eval(string[2]);
                break;
            
            default:
        }
    }
    else{
        return string;
    }
}

/*
console.log("total 1: ", eval(["+", 5, ["/", 20, 10]]));
console.log("total 2: ", eval(["/", ["+", 5, 20], 10]));
console.log("total 3: ", eval(["+", ["+", 5, ["-", 4, 2]], ["+", ["*", 2, 2], ["+", 3, 1]]]));
console.log("total 4: ", eval(["-", 1, ["+", 2, ["/", 4, 2]]]));

console.log("color: ", Math.ceil(Math.random()*255));
console.log(Math.floor(Math.random()*50)*10);
*/

function bonusTimeOut(){
    setTimeout(function(){fin()},3000); // 3000ms = 3
}

function fin(){	
    return false;
}

  //console.log(bonusTimeOut());

  /*
function handle(e){
    e.preventDefault() ;                               // Evita que cambie de pagina 
    value = document.getElementById("formula").value;  // Captura el dato de la entrada
    if(value === ""){ return; }                        // Si es vacio no hago nada
    document.getElementById("output").innerHTML = "Notación infija: "+str2inorder(value); // 
    //if(document.getElementById("output").innerHTML === str2inorder(value)){ return "bien"; }  
    document.getElementById("output2").innerHTML = "Resultado: "+eval(str2inorder(value)); // 
}
 
var form = document.getElementById("panda");
form.addEventListener("submit", handle, true);
*/

//****************************************************************************************************************/
//****************************************************************************************************************/ 

/*
function yy(x){
    var x=20; // let no permite cambiar la variable. salida => error
    function zz(x){
        var x=3;
        return x*x;
    }
    return x*zz(x);
}
console.log(yy(10))
*/

/*==========================================================================================================*/
// taller de recursion. ejepmlos.
// minimo comun divisor

function mcdStructural (n, m){
    let mejordivisor=function (menor){
        if(menor==1){
            return 1;
        }
        else {
            if((n%menor)==0 && (m%menor)==0){
                return menor;
            }
            return mejordivisor(menor-1);
        }
    }
    return mejordivisor(Math.min(n, m)); 
}

//console.log(mcdStructural(3, 12)); // => 3
//console.log(mcdStructural(18, 24)); // => 6
//console.log(mcdStructural(101135853,45014640)); // no funciona...
//console.log(Math.min(5, 12));

function mcdGenerative(n, m) {
    let mejorMCD = function (mayor, menor) {
        if (menor == 0) {
            return mayor;
        }
        else { 
            return mejorMCD(mayor%menor, menor); 
        }
    }
    return mejorMCD (m, m%n);
}
    
//console.log(mcdGenerative(101135853, 45014640)); // no funciona...
//console.log(mcdGenerative(18, 24)); // => 6
//console.log(mcdGenerative(3, 12)); // => 3 

function relativaAbsolutaCumulative(list, n) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        return cons((first(list) + n), relativaAbsolutaCumulative(rest(list), (first(list) + n)))
    }
}

//console.log(relativaAbsolutaCumulative([1,2,3], 1)); 
//console.log(relativaAbsolutaCumulative([1,2,3], 2));
// [1+1, 1+1+2, 1+1+2+3]
// [1+2, 1+2+3, 1+2+3+2]

function sumaCumulative(list) {
    let sumaAux=function (list){
        if(isEmpty(list)){
            return 0;
        }
        else {
            return sumaAux(rest(list)) + first(list);
        }
    }
    return sumaAux(list);
}

//console.log(sumaCumulative([1,2,3])); // => 6
//console.log(sumaCumulative([1,2,3,10,5,5])); // => 26

function filter(list, f) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        if (f(first(list))) {
            return cons(first(list), filter(rest(list), f))
        }
    
        else {
            return filter(rest(list), f);
        }
    }
}

console.log(filter([1, 2, 3, 4, 5], function(x) { return x % 2 === 1; }));
console.log(filter([1, 2, 3, 4, 5], x => x % 2 === 1));
console.log(filter([1, 2, 3, 4, 5], x => x % 2 == 0));