const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client/build')+'/index.html');
});


app.listen(port, '0.0.0.0',() => console.log('Application lancé'));