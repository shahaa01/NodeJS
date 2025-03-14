// let n = 5;
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("bye aadi")


// for(let i = 2; i < (process.argv).length; i++) {
//     console.log("Hello " , process.argv[i]);
// }

// const math = require("./math");
// const fruits = require("./Fruits"); //it will go search for index.js


// console.log(math.sum(1, 2));
// console.log(fruits.apple.color)

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


  //-> we cannot use packages from other directory, because it is installed locally in another directory.
//And local installation is the best practice but we can install packages globally

//import
import {sum, PI} from "./math.js" //in require we didn't write the file name with extension but here we have to specify the extension

console.log(sum(1,2))
console.log(PI)

/**
 * To import one major thing you need to do isL
 * The directory from which you are importing or exporting from:
 * You need to create a package.json by "npm init"
 * And in that package.json file you need to add:
 * "type": "module"
 */


/**
 * Reason for why to do this:
 * By default, Node.js uses CommonJS (require) for 
 * importing/exporting modules. If you want to use 
 * ES Modules (import/export), you must tell Node.js explicitly
 * by adding this line in package.json:
{
  "type": "module"
}
 */

/**
 * You cannot mix both require() and import/export, else will
 * throw ERROR
 */

/**
 * MAJOR ADVANTAGE OF USING IMPORT OVER REQUIRE():
 * Selectively load only pieces we need in import
 * LOADING IS SYNCHRONOUS for "REQUIRE" but can be :
 * "ASYNCHRONOUS for "IMPORT" -> you can use await and async stuffs here
 */

// let figlet = require("figlet");
//lets try using import now
import figlet from "figlet"; //how to import depends on the package provider so always check the documentation 

//we don't need to write the path like ./ for packages

figlet("Aaditya Shah!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }); 

  //using a random number generator package with import
  import random from 'random'

// quick uniform shortcuts
let min = 0;
let max = 1;
console.log(random.float((min), (max)));
