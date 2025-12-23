"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class DatosBasicos {
    name;
    description;
    createdAt;
    createdBy;
    constructor(name, description, createdAt, // aceddible en la clase y en las clases que hereden de esta
    createdBy // aceddible en la clase y en las clases que hereden de esta
    ) {
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
    get fullYear() {
        return this.createdAt.getFullYear();
    }
    get fullDescription() {
        return `${this.name} - ${this.description}`;
    }
}
class Producto extends DatosBasicos {
    stock;
    sku;
    constructor(stock, sku, name, description, createdAt, createdBy) {
        super(name, description, createdAt, createdBy);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDescription() {
        return `Producto: ${super.fullDescription}`;
    }
    guardar() {
        console.log('Guardando producto...');
    }
}
class Categoria extends DatosBasicos {
    products = [];
    constructor(name, description, createdAt, createdBy) {
        super(name, description, createdAt, createdBy);
    }
    agregarProducto(producto) {
        this.products.push(producto);
    }
    get fullDescription() {
        return `Categoria: ${super.fullDescription}`;
    }
    guardar() {
        console.log('Guardando categoria...');
    }
}
let producto1 = new Producto(100, 1, 'iphone', 'este es un smartphone', new Date(), 1);
let categoria = new Categoria('Celulares', '', new Date(), 1);
categoria.agregarProducto(producto1);
console.log(producto1.fullDescription);
// let datos  = new DatosBasicos('Test', 'Descripcion de test', new Date(), 1); // ERROR: no se puede instanciar una clase abstracta
//# sourceMappingURL=herencia.js.map