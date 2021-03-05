const mongoose = require('mongoose');
require('dotenv').config()

const password = process.env.MONDODB_PASSWORD;

const connect =  () => {
    return new Promise(async (resolve, reject) => {
        mongoose.connect(`mongodb+srv://swaty:${password}@cluster0.zan1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, (err) => {
            if (err) {
                console.log(err)
                reject()
            }
            resolve()
        })
    })
};

module.exports = connect;
