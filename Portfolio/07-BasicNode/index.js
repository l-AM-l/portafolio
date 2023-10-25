//07-BasicNode

console.log("hello world");
const sw = require("star-wars-quotes");
console.log(sw());

//go into npm and grab text form each npm 
const superheroes = require('superheroes');
const supervillains = require('supervillains');

/*NPM EXERCISE */
console.log("i was driving until I saw",superheroes.random(), "and crashed into a tree, then", supervillains.random(), "came and threw a bomb at my car");

/*
const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, fd) =>{
	console.log("error: "+ err);
	console.log("Content of file: " + fd);
});
*/

