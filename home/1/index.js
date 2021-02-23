const {writeFile} = require('fs'),
    path = require('path'),
    child_process = require('child_process');


try {
    let child = child_process.fork(path.join('./home/1','calculate_child.js'), process.argv.slice(2))
    child.on('message', (value) => {
        if (isNaN(value)) throw Error('Number is NaN')

        console.log(value)
        writeFile(path.join('./home/1', 'result.txt'), value, (err) => {
            if (err) {
                console.error(err)
            }
        })
    })


} catch (e) {
    console.error(e)
    writeFile(path.join('./home/1', 'error.txt'), e.stack, (err) => {
        console.error(err)
    })
}