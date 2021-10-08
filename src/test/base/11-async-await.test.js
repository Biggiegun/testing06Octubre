import '@testing-library/jest-dom'
import {getImagen} from '../../base/11-async-await'

describe('Validar url de API', ()=>{
    test('retornar url', async()=>{
        const url = await getImagen()
        expect(typeof url).toBe('string')
    })

    test('retornar url', async()=>{
        const url = await getImagen()
        expect(url.includes('https://')).toBe(true)
    })
})