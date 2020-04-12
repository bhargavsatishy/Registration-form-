
var fs = require('fs')
var path = require('path')
var express = require('express')
var promise = require('bluebird')
var bodyparser = require('body-parser')
var option = {
    promiseLib: promise


};

var pgr = require('pg-promise')(option)
var app = express();
var config = require('./apiconfig')
var conntstr = config.connectionString




app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Cache-Control,Pragma,Origin,Authorization,Content-Type,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "*");
    return next();
});
app.use(express.static(path.resolve(__dirname, 'pics')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use(bodyparser.json({ limit: '30mb' }));
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }));




app.get('/signup', (req, res, next) => {
    var database = pgr(conntstr);
    database.any('select * from task1').then((data) => {
        res.send(data)
    })
    pgr.end();
})

app.get('/Users/:id/:pwd', (req, res, next) => {
    var id = req.params.id;
    var pswd = req.params.pwd;
    var database = pgr(conntstr);

    var dt = new Date();
    var month = dt.getMonth();
    month = (month + 1).toString();

    //if month is 1-9 pad right with a 0 for two digits
    if (month.length === 1) {
        month = "0" + month;
    }

    var time = dt.getFullYear() + '/' + month + '/' + dt.getDate() + ',' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
    // console.log(time)
    // console.log(id + " " + pswd);

   
    database.any('select * from task1 where username = $1 and password = $2', [id, pswd]).then((data) => {
        res.send(data);
    })
    pgr.end();
});






app.get('/:username', (req, res, next) => {

    var username = req.params.username
    // console.log(username)
    var db = pgr(conntstr);
    db.any("select * from task1 where username=$1", username).then((data) => {

        res.send(data)
    })
    pgr.end()
})

app.post('/signup', (req, res, next) => {
    var name = req.body.name;
    var username = req.body.username;
    var password = req.body.password;
    
    var database = pgr(conntstr);
    database.any('insert into task1(name,username,password) values($1,$2,$3)', [name, username, password]).then((data) => {
        res.send({ message: " inserted...." })
    })
    pgr.end();
})





module.exports = app;