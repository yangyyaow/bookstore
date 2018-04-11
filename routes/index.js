var express = require('express');
var router = express.Router();
const home = require('../controllers/home');
const book =require('../controllers/book')

/* GET home page. */
router.get('/',book.get);

router.get('/:id',book.get);

router.get('/shoppingcar',function (req,res,next) {
    res.render('shoppingcar');
})
router.get('/account',function (req,res,next) {
    res.render('account')
})
router.get('/firmorder',function (req,res,next) {
    res.render('firmorder')
})
router.get('/pay',function (req,res,next) {
    res.render('pay')
})
router.get('/successpay',function (req,res,next) {
    res.render('successpay')
})
module.exports = router;
