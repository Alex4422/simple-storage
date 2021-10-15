const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


//app.use(express.static(__dirname + '/app/client'));
app.use(express.static( '/client'));

app.get('/*', function(req,res){
    //const fullPath = path.join(__dirname + '/app/client/index.html');
    const fullPath = path.join('/client/index.html');
    res.sendFile(fullPath);
})


app.listen(port, '0.0.0.0',() => console.log('Application lancé'));