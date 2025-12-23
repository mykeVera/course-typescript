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

// ***** CLASS *****
class Personaje {
    // readonly id: number; // Solo lectura, se asigna en el constructor
    // name: string;
    // nivel: number;
    // private _hp: number; // Solo accesible dentro de la clase, _ para indicar que es privado por convención
    profesion?: string; // Parámetro opcional, puede o no ser asignado
    private static equipo: number = 1; // Propiedad estática, pertenece a la clase y no a las instancias

    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number
    ) { }

    subirNivel(): number {
        return this.nivel++;
    }

    static agregarPersonaje():void {
        Personaje.equipo++;
    }

    cambiarHP(cantidad: number): number {
        return this._hp += cantidad;
    }

    // getHP(): number { // getter 2015, antiguo
    //     return this._hp;
    // }

    get hp(): number { // getter moderno
        return this._hp;
    }

    static getEquipo(): number {
        return Personaje.equipo;
    }

    // set hp(cantidad: number) { // setter nunca retorna algún valor, tratar de no usar setters, mejor metodos como cambiarHP.
    //     this._hp += cantidad;
    // }
}

const personaje = new Personaje(1, 'Nicolas', 1, 100);
personaje.cambiarHP(-10);

// if (typeof personaje) { } // RETURN OBJECT =(
// if (personaje instanceof Personaje) { } // RETURN BOOLEAN =)

const personaje1 = new Personaje(2, 'Chanchito', 1, 120);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());

