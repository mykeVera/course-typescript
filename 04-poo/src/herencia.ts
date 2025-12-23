/**
 * PRODUCTO
 * name
 * description
 * stock
 * sku
 * createdAt
 * createdBy
 * 
 * CATEGORIA
 * name
 * description
 * createdAt
 * createdBy
 */

abstract class DatosBasicos { // clase abstracta, no se puede instanciar, solo heredar
    constructor(
        public name: string,
        public description: string,
        protected createdAt: Date, // aceddible en la clase y en las clases que hereden de esta
        protected createdBy: number // aceddible en la clase y en las clases que hereden de esta
    ) { }

    get fullYear(): number {
        return this.createdAt.getFullYear();
    }

    get fullDescription(): string {
        return `${this.name} - ${this.description}`;
    }

    abstract guardar(): void; // método abstracto, las clases que hereden deben implementarlo
}

class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        description: string,
        createdAt: Date,
        createdBy: number
    ) {
        super(name, description, createdAt, createdBy);
    }

    override get fullDescription(): string { // override indica que estamos sobreescribiendo un método o propiedad de la clase padre
        return `Producto: ${super.fullDescription}`;
    }

    guardar(): void { // implementación del método abstracto
        console.log('Guardando producto...');
    }
}

class Categoria extends DatosBasicos {
    public products: Producto[] = [];
    constructor(
        name: string,
        description: string,
        createdAt: Date,
        createdBy: number
    ) {
        super(name, description, createdAt, createdBy);
    }

    agregarProducto(producto: Producto): void {
        this.products.push(producto);
    }

    override get fullDescription(): string { // override indica que estamos sobreescribiendo un método o propiedad de la clase padre
        return `Categoria: ${super.fullDescription}`;
    }

    guardar(): void { // implementación del método abstracto
        console.log('Guardando categoria...');
    }
}

let producto1 = new Producto(100, 1, 'iphone', 'este es un smartphone', new Date(), 1);

let categoria = new Categoria('Celulares', '', new Date(), 1);
categoria.agregarProducto(producto1);

console.log(producto1.fullDescription);

// let datos  = new DatosBasicos('Test', 'Descripcion de test', new Date(), 1); // ERROR: no se puede instanciar una clase abstracta
