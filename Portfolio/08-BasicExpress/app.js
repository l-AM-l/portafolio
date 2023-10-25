const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send("Hola");
});

app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/bmi', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    
    if (isNaN(weight) || isNaN(height)) {
        res.send("Please enter valid weight and height values.");
    } else {
        bmi = weight /(height*height);
        //redondea
        bmi =bmi.toFixed(2);
        
        res.send(`Your BMI is: ${bmi}`);
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
