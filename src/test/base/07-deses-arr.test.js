import '@testing-library/jest-dom'
import {retornaArreglo} from '../../base/07-deses-arr'

describe('Funciones', ()=>{

    test('Valores iguales',()=>{
        expect(retornaArreglo()).toEqual(['ABC',123])
    })
})