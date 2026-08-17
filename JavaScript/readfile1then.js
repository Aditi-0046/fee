console.clear();
console.log("Sr.No.1");
const fs = require("fs/promises");
fs.readFile("sample.txt","utf8")
   .then((response)=>{
    console.log("Sr.no.2");
    console.log("Response recevied");
    console.log(response);
  })
  .catch((error)=>{
    console.error("error reading the file",error.message);
  });
console.log("Sr.no.3");