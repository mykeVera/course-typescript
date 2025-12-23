"use strict";
/**
 * POO (Programación Orientada a Objetos)
 * Introducción
 * Clases
 * Control de acceso
 * Parámetros opcionales y de solo lectura
 * Propiedades por parámetros
 * Getters y setters
 * Propiedades y métodos estáticos
 * Herencia
 * Method override
 * Propiedades protegidas (protected)
 * Clases y métodos abstractos
 * Interfaces
 * Index signature
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ***** CLASS *****
class Personaje {
    id;
    name;
    nivel;
    _hp;
    // readonly id: number; // Solo lectura, se asigna en el constructor
    // name: string;
    // nivel: number;
    // private _hp: number; // Solo accesible dentro de la clase, _ para indicar que es privado por convención
    profesion; // Parámetro opcional, puede o no ser asignado
    static equipo = 1; // Propiedad estática, pertenece a la clase y no a las instancias
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        return this.nivel++;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    cambiarHP(cantidad) {
        return this._hp += cantidad;
    }
    // getHP(): number { // getter 2015, antiguo
    //     return this._hp;
    // }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
const personaje = new Personaje(1, 'Nicolas', 1, 100);
personaje.cambiarHP(-10);
// if (typeof personaje) { } // RETURN OBJECT =(
// if (personaje instanceof Personaje) { } // RETURN BOOLEAN =)
const personaje1 = new Personaje(2, 'Chanchito', 1, 120);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
//# sourceMappingURL=index.js.map