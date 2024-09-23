
const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', function(req, res) {
    res.render('auth/register');
});

router.post('/register', async function(req, res) {
    await authService.register(req.body);

    res.redirect('/auth/login');
});

router.get('/login', function(req, res) {
    res.render('auth/login');
});


module.exports = router;


