let express = require('express');
let router = express.Router();
router.use(express.static('./public')); // 把 public 中的檔案全部丟上來
// middleware that is specific to this router

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send(
    'NODE341109\'s home page'+'<br>'+
    '<a href="/user/NODE341109/about"> about </a>'+'<br>'+
    '<a href="/user/NODE341109/classA.html"> classA </a>'
    );
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> About NODE341109 </h1>'+
    '\n <img src="https://github.com/JustinLoedison/NODE341109/blob/2807dbe02e264fd8cbc56528bf1ca275327c9025/profile.jpg?raw=true" height="60%">'
    );
});

module.exports = router;
