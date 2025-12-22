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

// tipos inferidos
let extincionDinosaurs = 76_000_000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;

let mivariable;
mivariable = "Hola";
mivariable = 77;

// CONCLUSION: ASIGNAR SIEMPRE EL TIPO O INICIALIZARLA

function chanchitoFeliz(config: any) {
    return config
}

// tipos explicitos
let animales: string[] = ['chanchito', 'feliz', 'felipe'];
let numeros: number[] = [1, 2, 3, 4, 5];
let checks: boolean[] = [];
let numeros2: Array<number> = [];
// numeros.map(x => x.); // el autocompletado sugiere metodos del tipo de dato ;)

// ***** TUPLE ***** 
// set de datos con tipos fijos
let tupla: [number, string[]] = [1, ['chanchito', 'feliz']];
tupla.push(12); // error actual de TS no lo detecta pero en tiempo de ejecucion si puede fallar


// ***** ENUM ***** 
// conjunto de constantes con nombre
const chica = 'S'
const mediana = 'M'
const grande = 'L'
const extragrande = 'XL'

// Por convención usar PascalCase para los nombres de las tuplas
enum Talla { Chica = 'S', Mediana = 'M', Grande = 'L', ExtraGrande = 'XL' }

const variable1 = Talla.Grande
console.log(variable1);

const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success


// ***** OBJECT ***** 
//const objeto = { id: 1 }
//objeto.nombre = 'Hola mundo' // error no se puede agregar propiedades a un objeto ya tipado

type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number, // propiedad de solo lectura
    nombre?: string // propiedad opcional
    talla: Talla
    direccion: Direccion
}

const objeto: Persona = {
    id: 1,
    nombre: 'Hola mundo',
    talla: Talla.Mediana,
    direccion: {
        numero: 123,
        calle: 'Falsa',
        pais: 'Argentina'
    }
}

// objeto.id = 5 // error no se puede modificar una propiedad de solo lectura
objeto.nombre = 'Nuevo nombre' // ok

const arr: Persona[] = []; // array de objetos tipo Persona


// ***** FUNCTIONS *****
const fn: (a:number) => string = (edad: number) => {
    if (edad > 17)
        return 'puedes ingresar'
    return 'no puedes pasar'
}

function validaEdad(edad: number, msg: string = 'Chanchito feliz'): string {
    if (edad > 17)
        return `puedes ingresar ${msg}`
    return 'no puedes pasar'
}

validaEdad(18);


// ***** NEVER *****
function ErrorUsuario() {
    throw new Error('Error en la aplicación');
}





