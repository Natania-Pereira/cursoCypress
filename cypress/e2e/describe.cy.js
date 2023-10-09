/// <reference types="cypress" />

it.only('A external test...', () => {


})

describe('Shold group tests...', () => {
    describe ('Should grup more specific tests...', ()=> {
        it.skip('A specific test...', () => {


        })
    })
    describe ('Should grup more specific tests...2', ()=> {
        it('A specific test...2', () => {


        })
    })

    it('A internal test...', () => {


    })
})