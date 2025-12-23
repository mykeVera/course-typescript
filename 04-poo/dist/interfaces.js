"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// NOTA: Interface para clases y type para todo lo demás
class Caballo {
    name = 'Rocinante';
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'hin';
    }
}
class Cerdo {
    name = 'Chanchito Feliz';
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'oink';
    }
}
class Perro {
    name = 'Firulais';
    caminar() {
        console.log('Caminando');
    }
    onomatopeya() {
        return 'guau';
    }
}
// ***** INDEX SIGNATURES *****
class DiccionarioUsuarios {
}
let diccionario = new DiccionarioUsuarios();
diccionario['1a'] = 'Usuario 1';
diccionario['a1'] = 'Usuario 2';
console.log(diccionario);
//# sourceMappingURL=interfaces.js.map