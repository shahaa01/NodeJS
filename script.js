// let n = 5;
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("bye aadi")


// for(let i = 2; i < (process.argv).length; i++) {
//     console.log("Hello " , process.argv[i]);
// }

const math = require("./math");
const fruits = require("./Fruits"); //it will go search for index.js


console.log(math.sum(1, 2));
console.log(fruits.apple.color)

//NPM
/**
 * Library of packages - NPM - standard package manager for Node.js
 * package - collection of code written by someone which everyone can use
 * Express JS - We use EXPRESS JS - used for backend, server-side
 * REACT JS - For front end
 * These are all packages - bunch of codes written by some devs used by all other devs throughout the world\
 * so NPM is the manager (standard manager ) of these packages
 * so NPM is called library of packages
 * NPM is also a command line tool - we can use command line to install packages, decide the version of the package, we can use command line, manipulate and change
 * NPM - library where packages can be installed 
 * - command line tools is the tool through which packages can be installed and used by other devs
 * NPM - comes pre-installed with node
 * 
 * NODE_MODULES - a folder which contains every installed dependency for your project
 * DEPENDENCY - if you use API in your code then the API is the dependency for your project or code because if API fails your project fails
 * 
 */