const router = require('express').Router();

router.get('*', (req, res) => {
    res.render('404', { layout: false });
});

module.exports = router;