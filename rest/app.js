var express = require("express");
var path = require('path')
var Nearluk = require("./nearluk")
var profile = require("./profile")


var config = require('./apiconfig')

var app = express();

app.set("port", process.env.PORT || 4500)
app.all('*', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", '*');

    res.header("Access-Control-Allow-Headers", "Cache-Control,Pragma, Origin, Authorization, Content-Type, X-Requested-With");

    res.header("Access-Control-Allow-Methods", "*");

    return next();
});










app.use('/Nearluk', Nearluk)
app.use('/profile',profile)


// app.use('/email', email)
// app.use('/price', price)

// app.use('/country_notifications_admin', countrynotifications)
// app.use('/otp', otp)
// app.use('/verify', verify)



app.use(express.static(path.resolve(__dirname, 'pics')));

app.use(express.static(path.resolve(__dirname, 'uploads')));


app.listen(app.get('port'), (err) => {
    if (err) {
        console.log("server not started")
    }
    else { console.log("server  started http://localhost:" + app.get('port')) }
})