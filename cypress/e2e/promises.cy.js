it('sem testes, ainda', () => {})

const getSomething = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('respondendo...')
             resolve(12) ;
    
        }, 1000)

    })
    
}

const system = async () => {
    console.log('init');
    const some = await getSomething()
        console.log(`Something is ${some}`)
        console.log('end');
    }


system();
