let figlet = require("figlet");

//we don't need to write the path like ./ for packages

figlet("Aaditya Shah!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });