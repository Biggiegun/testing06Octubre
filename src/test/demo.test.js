console.log('Hola Mundo');

test('Hola Clase, el ejemplo debe ser verdadero', ()=>{
        const isActive = true;
        if (isActive) {
            throw new Error('No está activo')
        }
})

// Ejercicio #1

describe('Pruebas demo.test.js',()=>{

    test('Los String deben ser iguales',()=>{
        const mensajeUno = 'Hola Mundo'
        const mensajeDos = 'Hola Clase'
    
        expect(mensajeUno).toBe(mensajeDos);
    })

})

