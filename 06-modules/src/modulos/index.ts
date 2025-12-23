// import * as G from './Group.js'; // wildcard import, comodin
import Group, { defaultGroups } from './Group.js'; // import explicitly
import { Point, PUNTITO } from './Point.js';
import { Caballos, Chanchitos, Aninales } from "./Animales/index.js";

const point = new Point(1, 2);

const group = new Group(1, 'Developers');
console.log(PUNTITO);
console.log(defaultGroups.admin);

