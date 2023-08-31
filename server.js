const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Using nodemon');
});


