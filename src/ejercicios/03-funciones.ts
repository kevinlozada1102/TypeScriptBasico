/*
    ===== Código de TypeScript =====
*/
function sumar(a:number, b:number): number {
    return a + b;
}

const sumarFlecha = (a:number, b:number): number => {
    return a + b;
}

function multiplicar(numero: number, base:number, otroNumero?:number): number {
    return numero * base;
}

const resultado = sumar(10, 20);
const resultado2 = multiplicar(12345679, 81);

interface PersonajeMarvel {
    nombre:string;
    pv:number;
}

function curar(personaje:PersonajeMarvel, curarX:number): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje:PersonajeMarvel = {
    nombre: 'Thor',
    pv: 50
}

curar(nuevoPersonaje, 30)