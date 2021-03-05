// const { Strategy:LocalStrategy } = require('passport-local').Strategy
const { Strategy: LocalStrategy } = require('passport-local')
const User = require('../models/user')
const passport = require('passport')

const strategy = new LocalStrategy(
    {
        usernameField: 'login',
        passwordField: 'password',
    },
    async (username, password, done) => {
        let user = await User.findOne({ username: username })
    if ( !user )
        return done(new Error(`no user ${username}`), false)


    if (password !== user.password)
        return done(new Error(`password error`), false)

    return done(null, user);
})

passport.use(strategy)
passport.serializeUser((user, done) => {
    done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
    let user = await User.findOne({ username: username })
    done(null, user);
});

module.exports = () => [
    passport.initialize(),
    passport.session()
]
