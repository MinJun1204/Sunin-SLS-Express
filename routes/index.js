var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.isLogined) {
        var username = req.session.name
    } else {
        var username = 'Not Logined'
    }
    res.render('index', { title: '선인고 노트북 관리 시스템', text: 'SUNIN SLS', username: username });
});

router.post('/', function(req, res, next) {
    if (req.session.isLogined) {
        var username = req.session.name
    } else {
        var username = 'Not Logined'
    }
    res.render('index', { title: '선인고 노트북 관리 시스템', text: 'SUNIN SLS', username: username });
});

module.exports = router;