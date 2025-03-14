const apple = require('./apple');
const banana = require('./banana');
const orange = require('./orange');

// let Fruits = [apple, banana, orange];
let Fruits = {apple: apple, banana : banana, orange: orange};
module.exports  = Fruits;


//we will mandatory need to name it index.js because
//it will export all the file of the directory - index.js is a special file