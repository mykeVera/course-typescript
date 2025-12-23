"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// ***** UNION TYPE ***** 
let puntaje = 98;
puntaje = 'hola mundo';
let animal = { id: 1, estado: '', name: '' }; // Debe tener las propiedades de ambos tipos
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
const product = {
    createdAt: '',
    updatedAt: '',
    name: ''
};
const nDeFibo = 5;
// ***** NULLABLE TYPE *****
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(undefined);
// ***** OPTIONAL CHAINING OPERATOR: ? *****
function getUser(id) {
    if (id < 0)
        return null;
    return {
        id: 1,
        name: 'Juan',
        createdAt: new Date(),
    };
}
const user = getUser(1);
console.log('usuario', user?.createdAt);
if (user && user.createdAt) {
    console.log('usuario', user.createdAt);
}
const arr1 = null;
console.log(arr1?.[0]);
const fn5 = null;
console.log(fn5?.());
// function cb(fn){
//     if(fn){
//         fn()
//     }
// }
// ***** NULLISH COALESCING OPERATOR: ?? *****
const difficulty = 0;
const user2 = {
    username: 'admin',
    difficulty: difficulty ?? 1
};
console.log('user2', user2);
//# sourceMappingURL=index.js.map