"use strict";
/**
 * DECORADORES (TypeScript)
 * Decoradores de clase
 * Decoradores de métodos
 * Decoradores de Getters y Setters
 * Decoradores de propiedades
 * Composición de decoradores
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Route(ruta) {
    return (constructor) => {
        console.log('Ejecutando decorador Route');
        constructor.prototype.route = ruta;
    };
}
function Method(method) {
    return (target, methodName, descriptor) => {
        console.log(methodName, descriptor, target, method);
        const original = descriptor.value;
        descriptor.value = function (...args) {
            console.log('antes del método');
            original.call(this, ...args);
            console.log('después del método');
        };
    };
}
let Productos = class Productos {
    find(val) {
        console.log('Soy el método find' + val);
    }
};
__decorate([
    Method('get') // Decorador de método
], Productos.prototype, "find", null);
Productos = __decorate([
    Route('/productos') // Decorador de clase
], Productos);
const p = new Productos();
p.find(' hola mundo');
function UpperCase(target, methodName, descriptor) {
    console.log(target, methodName, descriptor);
    const original = descriptor.get;
    descriptor.get = function () {
        const r = original?.call(this);
        if (typeof r === 'string') {
            return r.toUpperCase();
        }
        return r;
    };
}
function Min(min) {
    return (target, propertyName) => {
        let val;
        const descriptor = {
            get() {
                return val;
            },
            set(v) {
                if (v.length < min) {
                    throw new Error(`La longitud mínima es ${min}`);
                }
                val = v;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    name;
    lastname;
    password;
    constructor(name, lastname, password) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    Min(6) // Decorador de propiedad
], User.prototype, "password", void 0);
__decorate([
    UpperCase
], User.prototype, "fullName", null);
const user = new User('Juan', 'Perez', '1234'); // Error: La longitud mínima es 6
console.log(user.password);
function Dec1(constructor) {
    console.log('Ejecutando decorador Dec1');
    console.log(constructor);
}
function Dec2(constructor) {
    console.log('Ejecutando decorador Dec2');
    console.log(constructor);
}
let User1 = class User1 {
};
User1 = __decorate([
    Dec1,
    Dec2
], User1);
//# sourceMappingURL=index.js.map