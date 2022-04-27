import { getSaludo } from "../../base/02-template-string"
import '@testing-library/jest-dom';


describe('Pruebas en 02-template-string.js', () => { 

test('getSaludo debe de retornar hola Javier', () => { 

    const nombre ='Javier';

    const saludo=getSaludo(nombre);

    expect(saludo).toBe('Hola '+ nombre+'!');

 })

 //GetSaludo debe de setornar Hola Carlos si no hay argumento nombre
 test('getSaludo debe de retornar Hola Carlos si no hay argumento nombre',()=>{

    const saludo= getSaludo();
    expect(saludo).toBe('Hola Carlos!');
 })




 })