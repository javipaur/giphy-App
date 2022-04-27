import { getUser, getUsuarioActivo } from "../../base/05-funciones"
import '@testing-library/jest-dom';

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un objeto', () => { 
       
        const usserTest={
            uid:'ABC123',
            username:'El_Papi1502'

        }

        const user= getUser();

        expect(user).toEqual(usserTest);

     })

     //GetUsuarioActivo debe de retornar un objeto

     test('GetUsuarioActivo debe de retornar un objeto', () => { 
        const nombre ='Javier';
        
        const user= getUsuarioActivo(nombre);

        expect(user).toEqual({
                uid: 'ABC567',
                username: nombre  
        });

     })


 })