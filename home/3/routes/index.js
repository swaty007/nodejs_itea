const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log(req.user)
    res.render('index', {title: 'Express', user: req.user});
});

router.route('/login')
    .get((req, res, next) => {
        console.log(req.user)
        res.render('login', {title: 'Login'});
    })
    .post(passport.authenticate('local', {failureRedirect: '/login'}),
        (req, res) => {
            res.redirect('/');
        });

router.route('/register')
    .get(async (req, res, next) => {
        if (req.isAuthenticated())
            return res.redirect('/');

        res.render('register', {title: 'Register'});
    })
    .post(async (req, res) => {

        let user = new User({
            username: req.params.username,
            age: req.params.age,
            name: req.params.name,
            password: req.params.password,
        })

        try {
            await user.save()
        } catch (e) {
            return res.status(406).json(`Error happens ${e}`);
        }
        return res.redirect('/');
    });

module.exports = router;
