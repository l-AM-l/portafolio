const express = require('express');
const app = express();
const path = require('path');
const tasks = [];

// Set the path to your index.html file
const indexPath = path.join(__dirname, '/html/index.html');
const wazzupPath = path.join(__dirname, '/html/wazzup.html');

// Route for the root path
app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/greet', (req, res)=>{
    const name = req.query.name;
    names.push(name);
    res.redirect('/html/wassup.html');
});
  app.get('/', (req, res) => {
    const namesLinks = names.map((name) => `<a href="/wazzup?name=${name}">${name}</a>`).join('<br>');
    res.send(`Greetings: ${namesLinks}`);
  });
  
  // Route for the /greet endpoint
  app.get('/greet', (req, res) => {
    const name = req.query.name;
    names.push(name);
    res.redirect('/');
  });
  
  // Route for the /wazzup endpoint
  app.get('/wazzup', (req, res) => {
    const name = req.query.name;
    app.get('/task', (req, res) => {
        res.json(tasks);
    });
    
    app.post('/task', (req, res) => {
        const task = req.body.task;
        tasks.push(task);
        res.redirect('/');
    });
    
    app.delete('/task/:task', (req, res) => {
        const task = decodeURIComponent(req.params.task);
        const index = tasks.indexOf(task);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
        res.sendStatus(200);
    });
    
    res.sendFile(wazzupPath);
  });
  
// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
