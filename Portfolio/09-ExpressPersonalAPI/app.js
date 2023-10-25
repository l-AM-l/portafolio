const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const names = [];
const tasks = [];

// GET: Return index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/html/index.html');
});

app.get('/greet', (req, res) => {

 const name = req.query.name;
  name.push(name);
  res.send('/html.wassup.html');
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}.`);
});