import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
import'@testing-library/jest-dom';

describe('Pruebas en funciones de Heroes', () => { 
    
    test('debe de retornar un heroe por id', () => { 
        
        const id=1;
        const heroe=getHeroeById(id)
       
        const heroeData=heroes.find(h=>h.id === id);
        
        expect(heroe).toEqual(heroeData);

     });

     test('debe de retornar un undefined si heroe no existe', () => { 
        
        const id=10;
        const heroes=getHeroeById(id)
       
        expect(heroes).toBe(undefined);

     });


     //Debe de retornar un arreglo con los hereos de Dc
     test('Debe de retornar un arreglo con los hereos de Dc', () => { 
        
        const owner='DC';
        const heroe=getHeroesByOwner(owner);
       
        const heroesData=heroe.filter(h=> h.owner === owner);

        expect(heroe).toEqual(heroesData);

     });

     //Debe de retornar un arreglo con los heres de Marvel
     test('Debe de retornar un arreglo con los heres de Marvel', () => { 
        
        const owner='Marvel';
        const heroes=getHeroesByOwner(owner)
       
        expect(heroes.length).toBe(2);

     });

 })