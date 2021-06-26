let express = require('express');
let router = express.Router();
let NODE341109 = require('./NODE341109.js');
let Fish = require('./Fish.js');
let Sheep = require('./Sheep.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/NODE341109', NODE341109);
router.use('/Fish', Fish);
router.use('/Sheep', Sheep);

module.exports = router;