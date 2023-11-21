const express = require('express');
const router = express.Router();
const gigs = require('../controllers/gigs')
const addGigs = require('../controllers/addGigs')
const searchGigs = require('../controllers/searchGigs');

router.get('/',gigs);
router.get('/addGigs',(req,res)=>{
    res.render('add')
});
router.post('/addGigs',addGigs);
router.get('/search',searchGigs);

module.exports = router;