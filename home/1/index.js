const {writeFile} = require('fs'),
    path = require('path')

let math = {}
math.add = require('./add.js') // +
math.div = require('./div.js') // -
math.mult = require('./mult.js') // *
math.sub = require('./sub.js') // /
const args = process.argv.slice(2)


try {
    let value = args[0]
    for (let i = 1; i < args.length; i += 2) {
        let func = args[i]
        value = math[func](value, args[i + 1])
    }
    if (isNaN(value)) throw Error('Number is NaN')
    writeFile(path.join('./home/1', './result.txt'), value, (err) => {
        console.error(err)
    })
} catch (e) {
    console.error(e)
    writeFile(path.join('./home/1', './error.txt'), e.stack, (err) => {
        console.error(err)
    })
}