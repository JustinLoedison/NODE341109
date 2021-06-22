let express = require('express');
let router = express.Router();
let NODE341109 = require('./NODE341109.js');
let Alice = require('./Alice.js');
let Bob = require('./Bob.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/NODE341109', NODE341109);
router.use('/Alice', Alice);
router.use('/Bob', Bob);

module.exports = router;