/**
 * TIPOS AVANZADOS (TypeScript)
 * Union type
 * Intersection type
 * Literal type
 * Nullable type
 * Optional chaining operator
 * Nullish Coalescing operator
 * Type assertion
 * Type narrowing
 * Unknown
 */

// ***** UNION TYPE ***** 

let puntaje: number | string = 98;
puntaje = 'hola mundo';

type Animal = {
    id: number;
    estado: string;
}
type Usuario = {
    id: number;
    name: string;
}
let animal: Usuario | Animal = { id: 1, estado: '', name: '' } // Debe tener las propiedades de ambos tipos

function sumaDos(n: number | string): number {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');


// ***** INTERSECTION TYPE *****
type Audit = {
    createdAt: string;
    updatedAt: string;
}
type Product = {
    name: string;
}
const product: Product & Audit = { // Debe tener las propiedades de ambos tipos
    createdAt: '',
    updatedAt: '',
    name: ''
}


// ***** LITERAL TYPE *****
type Fibo = 0 | 1 | 2 | 3 | 5;
const nDeFibo: Fibo = 5;


// ***** NULLABLE TYPE *****
function toNumber(s: string | null | undefined): number {
    if (!s) {
        return 0
    }
    return parseInt(s)
}
const n = toNumber(undefined);


// ***** OPTIONAL CHAINING OPERATOR: ? *****
function getUser(id: number) {
    if (id < 0) return null;
    return {
        id: 1,
        name: 'Juan',
        createdAt: new Date(),
    }
}
const user = getUser(1);
console.log('usuario', user?.createdAt)

if (user && user.createdAt) {
    console.log('usuario', user.createdAt)
}

const arr1 = null
console.log(arr1?.[0]);

const fn5: any = null
console.log(fn5?.());

// function cb(fn){
//     if(fn){
//         fn()
//     }
// }


// ***** NULLISH COALESCING OPERATOR: ?? *****
const difficulty: number | null = 0;
const user2 = {
    username: 'admin',
    difficulty: difficulty ?? 1
}
console.log('user2', user2);


// ***** TYPE ASSERTION *****
const elem: any = null;
const elem1 = elem as number

const input = document.getElementById('username') as HTMLInputElement;
const input2 = <HTMLInputElement>document.getElementById('username');
input.value = 'hola'; // Si no se hace el type assertion, value da error porque HTMLElement no tiene esa propiedad
input2.value = 'hola';


// ***** TYPE NARROWING *****
function Lala(x: string | number) {
    if (typeof x === 'number') {
        x.toFixed(); // nos recomienda todos los metodos para number
    }
    if (typeof x === 'string') {
        x.toUpperCase(); // nos recomienda todos los metodos para string
    }
}


// ***** TYPE UNKNOWN *****
function procesa(algo: unknown){
    if(typeof algo === 'string'){
        algo.toUpperCase()
    }

    if(typeof algo === 'number'){
        algo.toFixed()
    }

    if(algo instanceof String){

    }
    // algo.hacerCosas()
    // algo.otrasCosas()
    // algo.genkidama()
}


