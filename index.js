const modules = [
    require('./source-code-praktik/M01/H02/index')
]
// const h1 = require('./source-code-praktik/H01/index')


// h1.run()
// h1.run()
for (let index = 0; index < modules.length; index++) {
    // const element = modules[index];
    modules[index].run()
    
}