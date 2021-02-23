let math = {}
math.add = require('./add.js') // +
math.div = require('./div.js') // -
math.mult = require('./mult.js') // *
math.sub = require('./sub.js') // /

const args = process.argv.slice(2)

let value = args[0]
for (let i = 1; i < args.length; i += 2) {
    let func = args[i]
    value = math[func](value, args[i + 1])
}

process.send(value)

process.exit()