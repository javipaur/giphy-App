import React from "react"
import {shallow}  from "enzyme"
import CounterApp from "../CounterApp"

describe('Pruebas en el <CounterApp>', () => { 

    let wrapper=shallow(<CounterApp/>);

    beforeEach(()=>{
        console.log('beforeEach!!!')
        wrapper =shallow(<CounterApp/>);
    })

    test('debe de mostar el <CounterApp/>', () => { 
            
        expect(wrapper).toMatchSnapshot();
    
     })


     test('debe de mostar el <CounterApp/>', () => { 

        const wrapper =shallow(<CounterApp value={100}/>);

        const counterText=wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
      })

      test('debe de incrementar con el boton +1', () => { 
        //Simulamos el evento Click
        wrapper.find('button').at(0).simulate('click');
        //Comprobamso is el valor cambia
        const counterText=wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('11');

       })


       test('debe de incrementar con le boton -1', () => { 

        wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
        })


        test('debe de colocar el valor por defecto con el boton de reset', () => { 

            const wrapper =shallow(<CounterApp value={105}/>);

            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(0).simulate('click');
            wrapper.find('button').at(1).simulate('click');
            const counterText=wrapper.find('h2').text().trim();
            
            expect(counterText).toBe('105');
         })


 })