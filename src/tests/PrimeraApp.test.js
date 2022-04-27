import  {render}  from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";
import  PrimeraApp  from "../PrimeraApp";
import'@testing-library/jest-dom';


describe('Pruebas en <PrimeraApp/>', () => { 

    // test('debe mostrar el mensaje"Hola, soy Goku"', () => { 

    //     const saludo='Hola, soy Goku'
    //     //El componente que queremos renderizar
    //     const {getByText} =render(<PrimeraApp saludo= {saludo}/>)

    //     expect(getByText(saludo)).toBeInTheDocument();


    //  })

    test('debe de mostrar <PrimeraApp/> correctamente', () => { 
        const saludo ='Hola, Soy Goku'
        const wrapper =shallow(<PrimeraApp saludo={saludo}></PrimeraApp>)

        expect(wrapper).toMatchSnapshot();

     })

     test('debe de mostrar el subtitulo enviado por porps', () => { 


        const saludo ='Hola, Soy Goku';
        const subtitulo='Soy un subtitulo';

        const wrapper =shallow(
        <PrimeraApp 
           saludo={saludo} 
           subtitulo={subtitulo}>
        </PrimeraApp>)

            const textoParrafo=wrapper.find('p').text();
            
            expect(textoParrafo).toBe(subtitulo);


      })




 })