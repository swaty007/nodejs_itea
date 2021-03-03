// const { Strategy:LocalStrategy } = require('passport-local').Strategy
const { Strategy: LocalStrategy } = require('passport-local')
const users = require('./users')

const strategy = new LocalStrategy(
    {
        usernameField: 'login',
        passwordField: 'password',
    },
    (username, password, done) => {
    if ( username in users === false)
        return done(new Error(`no user ${username}`), false)

    const user = users[username]

    if (password !== user)
        return done(new Error(`password error`), false)

    return done(null, users[username]);
})

module.exports = strategy