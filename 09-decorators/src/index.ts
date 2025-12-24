/**
 * DECORADORES (TypeScript)
 * Decoradores de clase
 * Decoradores de métodos
 * Decoradores de Getters y Setters
 * Decoradores de propiedades
 * Composición de decoradores
 */

function Route(ruta: string) {
    return (constructor: Function) => {
        console.log('Ejecutando decorador Route');
        constructor.prototype.route = ruta;
    }
}

function Method(method: string) {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        console.log(methodName, descriptor, target, method);
        const original = descriptor.value;
        descriptor.value = function (...args: any) {
            console.log('antes del método');
            original.call(this, ...args);
            console.log('después del método');
        }
    }
}

@Route('/productos') // Decorador de clase
class Productos {
    @Method('get') // Decorador de método
    find(val: string) {
        console.log('Soy el método find' + val);
    }
}

const p = new Productos();
p.find(' hola mundo');


function UpperCase(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log(target, methodName, descriptor);
    const original = descriptor.get;
    descriptor.get = function () {
        const r = original?.call(this);
        if (typeof r === 'string') {
            return r.toUpperCase();
        }

        return r;
    }
}

function Min(min: number) {
    return (target: any, propertyName: string) => {
        let val: string;
        const descriptor: PropertyDescriptor = {
            get() {
                return val;
            },
            set(v: string) {
                if (v.length < min) {
                    throw new Error(`La longitud mínima es ${min}`);
                }

                val = v;
            },
        }
        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {
    @Min(6)  // Decorador de propiedad
    public password: string;

    constructor(public name: string, public lastname: string, password: string) {
        this.password = password;
    }

    @UpperCase
    get fullName() { // Decorador de Getter
        return `${this.name} ${this.lastname}`;
    }
}

const user = new User('Juan', 'Perez', '1234');  // Error: La longitud mínima es 6
console.log(user.password);



function Dec1(constructor: Function) {
   console.log('Ejecutando decorador Dec1');
   console.log(constructor);
}

function Dec2(constructor: Function) {
   console.log('Ejecutando decorador Dec2');
   console.log(constructor);
}

@Dec1
@Dec2
class User1 {}  // La salida será Dec2 y luego Dec1 debido a la composición de decoradores, de abajo hacia arriba

export {}