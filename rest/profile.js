var express = require('express');
var promise = require('bluebird');
var bodyparser = require('body-parser');
var option = { promiseLib: promise }
var pgr = require('pg-promise')(option);
var profile = express.Router();
var path = require('path')
var fs = require('fs')

profile.use(bodyparser.urlencoded({ extended: true }))
profile.use(bodyparser.json())

var cs = "postgres://postgres:root@localhost:5432/nearluk"

profile.get("/", (req, res, next) => {

    var db = pgr(cs)
    db.any("select * from task1").then((data) => {
        res.send(data)
    })
    pgr.end()
})

profile.get('/:id', (req, res, next) => {

    var i = req.params.id
    var db = pgr(cs);
    db.any("select * from task1 where username=$1", i).then((data) => {

        res.send(data)
    })
    pgr.end()
})

profile.put('/:name', (req, res, next) => {

    var i = req.params.name;
    var j = req.body.timer;
    var k = req.body.description;
    console.log(req.body,i)
    var db = pgr(cs);
    db.any("update task1 set timer=$1,description=$2 where username=$3", [j,k,i]).then((data) => {

        res.send(data)
    })
    pgr.end()
})

module.exports = profile;