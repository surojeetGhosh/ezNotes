const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const port = 3000 || process.env.PORT;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', ejs);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port, () => {
console.log("Server Started");
})