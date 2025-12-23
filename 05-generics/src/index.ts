/**
 * GENÉRICOS:
 * Genéricos en funciones
 * Genéricos en clases
 * Genéricos en interfaces
 * Restricciones en genéricos
 * Genéricos y herencia
 * Operador keyof
 * Utility types
 */


// ***** GENERICOS EN FUNCIONES *****
// function log<T, V>(a: T, b: V): V{
//     console.log(a, b);
//     return b;
// }

// log<string, number>("Hola", 42);
// log<string, string>("Hola", "Mundo");

// log(1, 2)
// log("Hola", "Mundo")

async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`);
    return respuesta.json();
}

type User = {
    id: string;
    name: string;
}

async function main() {
    const user = await fetchData<User>('/usuarios')
    user.id; // TypeScript sabe que user es de tipo User
};


// ***** GENERICOS EN CLASES *****
type Computador = {
    encender: () => void;
    apagar: () => void;
}

class Programador<T> {
    computador: T;

    constructor(t: T) {
        this.computador = t;
    }
}

const programador = new Programador<Computador>({ encender: () => { }, apagar: () => { } });
programador.computador.encender();

const programador1 = new Programador<String>('Hola Mundo');
programador1.computador.toUpperCase();


// ***** GENERICOS EN INTERFACES *****
interface KeyValue<T, V> {
    key: T;
    value: V;
}

interface Product {
    id: string;
}

function fetchProduct(): KeyValue<string, Product> {
    return {
        key: '123',
        value: {
            id: '123'
        }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: '123',
        value: 500
    }
}


// ***** RESTRICCIONES EN GENERICOS *****
// interface Usuario {
//     id: string;
//     name: string;
// }
class Usuario {
    constructor(public id: string) { }
}
function print<T extends Usuario>(t: T): T {
    console.log(t);
    return t;
}

print({ id: 'user_id', name: 'Juan' });


// ***** GENERICOS Y HERENCIA *****
class Estado<T> {
    protected data: T[] = [];

    agregar(t: T): void {
        this.data.push(t);
    }

    getEstado(): T[] {
        return this.data;
    }
}

type ObjectId = {
    id: string;
}
class EstadoEliminar<T extends ObjectId> extends Estado<T> {
    eliminar(id: string) {
        this.data = this.data.filter(x => x.id !== id);
    }
}

// Pasar generico
// Con restricciones
class EstadoUsuarios extends Estado<Usuario> {
    reiniciarContrasenas() {
        // Lógica para reiniciar contraseñas
    }
}

// Fijo
const estadoUsuarios = new EstadoUsuarios();


// ***** OPERADOR KEYOF *****
type Calendar = {
    id: number,
    fuente: string,
    dueno: string
}

const calendar: Calendar = { id: 1, fuente: 'Google', dueno: 'Juan' };

function getProp<T>(objeto: T, property: keyof T): unknown {
    return objeto[property];
}

getProp<Calendar>(calendar, 'id');
getProp<Calendar>(calendar, 'fuente');
//getProp<Calendar>(calendar, 'propiedadQueNoExiste'); // Error de compilación


// ***** UTILITY TYPES *****
type Punto = {
    x: number,
    y: number,
    desc?: string,
}

type PuntoOpcional = Partial<Punto> // Hace todas las propiedades opcionales
type PuntoRequerido = Required<Punto> // Hace todas las propiedades requeridas

const keyVal: Record<string, number> = { // Define un objeto con claves de tipo string y valores de tipo number
    'soy un string': 42
}

type kv = { [key: string]: number }; // Mismo resultado que Record<string, number>

const p: Omit<Punto, 'desc' | 'y'> = { // Omite la propiedad 'desc' de Punto
    x: 10,
    // y: 20
}

const p1: Pick<Punto, 'x' | 'y'> = { // Solo incluye las propiedades 'x' y 'y' de Punto
    x: 10,
    y: 20,
    // desc: 'Un punto'
}

const readOnly: Readonly<Punto> = { // Hace todas las propiedades de Punto de solo lectura
    x: 10,
    y: 20,
    desc: 'Un punto'
};
// readOnly.x = 15; // Error de compilación






