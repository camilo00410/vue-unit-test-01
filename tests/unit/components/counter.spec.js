import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount( Counter );
    })

    // test('debe de hacer match con el snapshot', () => {
    //     const wrapper =  shallowMount( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()    
    // })

    test('h2 debe de tener el valor por defecto', () => {

        // const wrapper = shallowMount( Counter )
        expect(wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        // console.log(h2.text()); 
        expect( h2Value ).toBe('Counter')
    })

    test('El valor por defecto debe de ser 100 en el p', async() => {

        // Wrapper
        // const wrapper = shallowMount( Counter )

        // pTags
        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()

        // Expect segundo p = 100
        // expect( pTags[1].text() ).toBe('100')
        expect( value ).toBe('100')

        const [ increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger('click')
    })

    test('debe de incrementar y decrementar el contador', async() => {

        // const wrapper = shallowMount( Counter )
        // const increaseBtn = wrapper.find('button')
        const [ increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        
        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('101')
    })

    test('debe de establecer el valor por defecto', () => {

        const { start } = wrapper.props()
        // const start = wrapper.props('start')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect( Number(value) ).toBe( start )
    })


    test('debe de mostrar la prop title', () => {
        const title = "Hola mundo"

        const wrapper = shallowMount( Counter, {
            props:{
                title, 
                start: 5
            }
        } )

        expect( wrapper.find('h2').text() ).toBe('Hola mundo')
    })        
    
})