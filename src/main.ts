// Interfaz de un grupo
interface GrupoMusical {
    nombreGrupo: string;
    añoFundacion: number;
    activo: boolean
    generoMusical: string;
}

// Géneros por variable
const rock = "🎸 Rock";
const popRock = "🎵 Pop Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Estilo del nombre
const styleNombre = "font-weight: 600; font-size: 16px; color: green;"


let grupo1: GrupoMusical = {
    nombreGrupo: 'The Beatles',
    añoFundacion: 1960,
    activo: true,
    generoMusical: popRock,
}

let grupo2: GrupoMusical = {
    nombreGrupo: 'Queen',
    añoFundacion: 1970,
    activo: false,
    generoMusical: rock,
}

let grupo3: GrupoMusical = {
    nombreGrupo: 'AC DC',
    añoFundacion: 1973,
    activo: true,
    generoMusical: hardRock,
}

let grupo4: GrupoMusical = {
    nombreGrupo: 'Ludwig van Beethoven',
    añoFundacion: 1770,
    activo: true,
    generoMusical: clasica,
}

let grupo5: GrupoMusical = {
    nombreGrupo: 'The Rolling Stones',
    añoFundacion: 1962,
    activo: true,
    generoMusical: rock,
}

// The Beatles
console.log(`%c${grupo1.nombreGrupo}`, styleNombre, `/ ${grupo1.añoFundacion} / Activo: ${grupo1.activo} / ${grupo1.generoMusical}`);

// Queen
console.log(`%c${grupo2.nombreGrupo}`, styleNombre, `/ ${grupo2.añoFundacion} / Activo: ${grupo2.activo} / ${grupo2.generoMusical}`);

// AC DC
console.log(`%c${grupo3.nombreGrupo}`, styleNombre, `/ ${grupo3.añoFundacion} / Activo: ${grupo3.activo} / ${grupo3.generoMusical}`);

// Ludwig van Beethoven
console.log(`%c${grupo4.nombreGrupo}`, styleNombre, `/ ${grupo4.añoFundacion} / Activo: ${grupo4.activo} / ${grupo4.generoMusical}`);

// The Rolling Stones
console.log(`%c${grupo5.nombreGrupo}`, styleNombre, `/ ${grupo5.añoFundacion} / Activo: ${grupo5.activo} / ${grupo5.generoMusical}`);