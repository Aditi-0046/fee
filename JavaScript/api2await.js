console.clear();
async function getusers(){
    try{
    console.log("Fetching user");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!response.ok){
        throw new Error(`HTTP error!: ${response.status}`);
    }
    const users = await response.json();
    
    console.log("Users received:");
    console.log(users);
} catch(error){
    console.log("Something went wrong:")
    console.error( error.message);
}finally{
    console.log("Fetch operation completed");
}
}
getusers();