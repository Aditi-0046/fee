console.clear();
const fs = require("fs/promises");
async function readLocalfile(){
    try{
        console.log("Begin");
        const data = await fs.readFile("sample.txt","utf8");
        console.log("Success! File content below:");
        console.log(data);

    }
    catch(error){  
        console.error("error reading the file",error.message);   //.error is used to display error message in red color in console
    }
    finally{     //cleanup code will be executed in finally block whether try block is successful or catch block is executed
        console.log("End...");
    }
}
readLocalfile();
console.log("This was last sync code which is displayed here");
