const express = require('express')
const router = express.Router()
const mysql = require('mysql')

/* GET users listing. */
router.post('/login', function(req, res, next) {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '111111',
        database: 'id10675326_suninsls'
    })
    conn.connect()

    conn.query(`SELECT * FROM user WHERE name = '${req.body.name}'`, function(err, rows, fields) {

        if (err) throw err
        if (rows) {
            var pw = rows[0]['pw']
            if (req.body.pw == pw) {
                req.session.isLogined = true
                req.session.name = req.body.name
                req.session.save(function(err) {
                    res.redirect('/')
                })
            } else {
                //res.send('<script>alert("비밀번호가 틀렸습니다");</script>')
                res.redirect('/')
            }
        } else {
            //res.send('회원가입을 해주세요')
            res.redirect('/')
        }
    })
    conn.end()
})

router.get('/logout', function(req, res, next) {
    req.session.destroy(function(err) {
        res.redirect('/')
    })
})

module.exports = router