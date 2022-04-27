import { retornaArreglo } from "../../base/07-deses-arr"
import'@testing-library/jest-dom';
describe('Pruebas desestructuracion', () => { 
    
    test('debe de retornar un string y un numero', () => { 

        const arr=retornaArreglo();

        const [letras,numero]=retornaArreglo();
        
        expect(letras).toBe('ABC')
        expect( typeof letras).toBe('string')

        expect(numero).toBe(123)
        expect( typeof numero).toBe('number')
        

     })

 })