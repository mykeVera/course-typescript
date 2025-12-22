"use strict";
/**
 * TIPO DE JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * TIPOS DE TS
 * any (NO USAR)
 * unknown
 * never
 * array
 * tuple
 * enum
 *
 * TIPOS INFERIDOS
 */
Object.defineProperty(exports, "__esModule", { value: true });
// tipos inferidos
let extincionDinosaurs = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let mivariable;
mivariable = "Hola";
mivariable = 77;
// CONCLUSION: ASIGNAR SIEMPRE EL TIPO O INICIALIZARLA
function chanchitoFeliz(config) {
    return config;
}
// tipos explicitos
let animales = ['chanchito', 'feliz', 'felipe'];
let numeros = [1, 2, 3, 4, 5];
let checks = [];
let numeros2 = [];
// numeros.map(x => x.); // el autocompletado sugiere metodos del tipo de dato ;)
// ***** TUPLE ***** 
// set de datos con tipos fijos
let tupla = [1, ['chanchito', 'feliz']];
tupla.push(12); // error actual de TS no lo detecta pero en tiempo de ejecucion si puede fallar
// ***** ENUM ***** 
// conjunto de constantes con nombre
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
// Por convención usar PascalCase para los nombres de las tuplas
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["Idle"] = 0] = "Idle";
    LoadingState[LoadingState["Loading"] = 1] = "Loading";
    LoadingState[LoadingState["Success"] = 2] = "Success";
    LoadingState[LoadingState["Error"] = 3] = "Error";
})(LoadingState || (LoadingState = {}));
const estado = LoadingState.Success;
//# sourceMappingURL=index.js.map