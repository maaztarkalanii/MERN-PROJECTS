const fs = require("fs");
fs.appendFile(
  "File1.txt",
  "   Person:2  --I am Good how about you  ",
  (err) => {
    if (err) {
      console.log(`can't update the file  ${err}`);
    } else {
      console.log("Updated code successfully!!!!!");
    }
  }
);
