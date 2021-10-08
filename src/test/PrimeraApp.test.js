import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PrimeraApp from '../PrimeraApp'

configure({adapter: new Adapter()})
describe('Pruebas <PrimeraApp/>', ()=>{
    test('Validar render de <PrimeraApp/>', ()=>{
        const saludoC = 'Hola clase'
        const subTitulo='soy un subtitulo'
        const compo = shallow(<PrimeraApp saludo={saludoC} subtitulo={subTitulo}/>)

        const textParrafo = compo.find('p').text().trim();

        expect(textParrafo).toBe(subTitulo)
        expect(compo).toMatchSnapshot();
    })
})