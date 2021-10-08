import '@testing-library/jest-dom'
import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp'
import {heroes} from '../../data/heros'

describe('pruebas con función heroes', ()=>{
    test('Retornar id',()=>{
        const id = 2;
        const personaje = getHeroeById(id);

        const heroeData = heroes.find((h)=>h.id === id)
        expect(heroeData).toEqual(personaje)
    })
    test('Retornar undefined si heroe no existe', ()=>{
        const id = 10;
        const personaje = getHeroeById(id);
        expect(personaje).toBe(undefined)
    })
})


// Ejercicio 6

describe('filtrar Heroes', ()=>{
    test('filtrar Marvel',()=>{
        const owner = 'Marvel';
        const personaje = getHeroesByOwner(owner);

        const heroeFiltered = heroes.filter((heroe)=>heroe.owner === owner)
        expect(heroeFiltered).toEqual(personaje)
    })
    test('filtrar DC', ()=>{
        const owner = 'DC';
        const personaje = getHeroesByOwner(owner);

        const heroeFiltered = heroes.filter((heroe)=>heroe.owner === owner)
        expect(heroeFiltered).toEqual(personaje)
    })
})
