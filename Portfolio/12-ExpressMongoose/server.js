require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

//const mongoUrl = "mongodb://127.0.0.1:27017/f1";
const user =process.env.DB_USERS;
const pass = process.env.BD_PASS;
const mongoURL =  `mongod+srv://${user}:%{pass}@cluster0.em6w7.mongodb.net/f1?retryWrites=true&w=majority `;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Definition of a schema
const teamSchema = new mongoose.Schema({
  id: Number,
  code: String,
  label: String,
  country: String,
  url: String,
});
teamSchema.set("strictQuery", true);

const driverSchema = new mongoose.Schema({
  num: Number,
  code: String,
  forename: String,
  surname: String,
  dob: Date,
  nationality: String,
  url: String,
  team: teamSchema,
});
driverSchema.set("strictQuery", true);

const Team = mongoose.model("Team", teamSchema);
const Driver = mongoose.model("Driver", driverSchema);

let countries = [
  { code: "ENG", label: "England" },
  { code: "SPA", label: "Spain" },
  { code: "GER", label: "Germany" },
  { code: "FRA", label: "France" },
  { code: "MEX", label: "Mexico" },
  { code: "AUS", label: "Australia" },
  { code: "FIN", label: "Finland" },
  { code: "NET", label: "Netherlands" },
  { code: "CAN", label: "Canada" },
  { code: "MON", label: "Monaco" },
  { code: "THA", label: "Thailand" },
  { code: "JAP", label: "Japan" },
  { code: "CHI", label: "China" },
  { code: "USA", label: "USA" },
  { code: "DEN", label: "Denmark" },
];

let TeamsRaw= [
  {code : "mercedes", label: "Mercedes", country: "GER"},
  {code : "aston_martin", label: "Aston Martin", country: "ENG"},
  {code : "alphine", label: "Alphine", country: "FRA"},
  {code : "hass_f1", label: "Haas F1 Team", country: "USA"},
  {code : "red_bull", label: "Red Bull Racing", country: "AUS"},
  {code : "aston_martin", label: "Aston Martin", country: "ENG"},
]
let teams = [];
let drivers = [];
app.use('/', (req, res, next)=>{
  //TODO: get the name if the teams from the DB to show in the form
  if(teams.length===0){
    var teamsDB = await Team.find({}).exec();
    if(!Array.isArray(teamsDB)||teamsDB.length===0){
      // i have an empty array i need to populate
      await Team.insertMany(TeamsRaw).then(()=>{
        console.log("temas loaded");
      }).catch((error)=>{
        console.error(error);
      });

      //TODO: load again records from the db
      await Team.find({}) 
      .then({docs} => {
        console.log("found the following teams");
        console.log(docs);
        teams= docs;
      })
      .catch((error)=>{
        console.error(error);
      });
    }else{
      teams = teamsDB;
    }
  }
  
  next();
})

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/public/html/index.html");
 res.render("index", {countries});
});

app.post("/driver", (req, res) => {
  //res.sendFile(__dirname + "/public/html/index.html");
  var team = await Team.findOne({code: {$eq: req.body.team}})
 var num = req.body.num;
 var driver = {
  num: req.body.num,
  code: req.body.code,
  forename:req.body.name,
  surname: req.body.lname,
  dob:req.body.dob,
  nationality: req.body.nation,
  url: req.body.url,
  team: teamSchema,
 };
 await Driver.insertOne(driver)
 .then(()=>{
  console.log()
 })
});


app.listen(3000, (err) => {
  console.log("Listening on port 3000");
});
