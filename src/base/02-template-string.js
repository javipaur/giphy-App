


const nombre   = 'Javier';
const apellido = 'Palacio';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


export function getSaludo(nombre='Carlos') {
    return 'Hola ' + nombre+'!';
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );