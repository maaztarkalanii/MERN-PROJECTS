const fs = require("node:fs");
fs.writeFile("File1.txt", "Hello! what's going on......", function (err) {
  if (err) {
    console.log(`can't create file${err}`);
  } else {
    console.log("Successfully created the file");
  }
});


