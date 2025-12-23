interface Animal { // Define la estructura que deben seguir los animales
    name: string;

    caminar(): void;
    onomatopeya(): string;
}

// NOTA: Interface para clases y type para todo lo demás

class Caballo implements Animal { // Implementa la interfaz Animal
    name: string = 'Rocinante';

    caminar(): void {
        console.log('Caminando');
    }

    onomatopeya(): string {
        return 'hin';
    }
}

class Cerdo implements Animal { // Implementa la interfaz Animal
    name: string = 'Chanchito Feliz';

    caminar(): void {
        console.log('Caminando');
    }

    onomatopeya(): string {
        return 'oink';
    }
}

class Perro implements Animal { // Implementa la interfaz Animal
    name: string = 'Firulais';

    caminar(): void {
        console.log('Caminando');
    }

    onomatopeya(): string {
        return 'guau';
    }
}

// ***** INDEX SIGNATURES *****
class DiccionarioUsuarios {
    [id: string]: string;
}

let diccionario = new DiccionarioUsuarios();
diccionario['1a'] = 'Usuario 1';
diccionario['a1'] = 'Usuario 2';

console.log(diccionario);