// // /*Game: guess the number : Number ko pahchano
// // Hint: Number is between 1 to 10
// // You have got max 5 chances
// // ENter your guess:
// // You tried 0 times
// // The exact number was 3*/
// // console.clear();
// // console.log("Game: guess the number : Number ko pahchano");
// // const secretNumber = Math.floor(Math.random() * 10) + 1;
// // console.log("Hint: Number is between 1 to 10");
// // console.log("You have got max 5 chances");
// // let myNumber = 0;
// // let attempts = 0;

// // //code for taking input
// // console.log("Enter your guess:");

// // //exit when attempts >5 or number=100
// // console.log("\nYou tried ${attempts} times");

// // //ternary operator for won or lost 
// // console.log("\n The exact number was ${secretNumber}\n");







// const prompt = require("prompt-sync")();

// console.clear();
// console.log("\nGame: Guess the Number");

// const secretnumber = Math.floor(Math.random() * 10) + 1;

// console.log("\nHint: Number is between 1 and 10");
// console.log("You have got max 5 chances");

// for (let attempts = 5; attempts > 0; attempts--) {

//     let number = Number(prompt("Enter your guess: "));
    
//     if (number === secretnumber) {
//         console.log("🎉 You Win!");
//         break;
//     } else if (number > secretnumber) {
//         console.log("Too High");
//     } else if(number<secretnumber){
//         console.log("Too Low");
//     }
//     else{
//         console.log("OK");
//     }

//     if (attempts === 1) {
//         console.log(`\nThe exact number was ${secretnumber}\n`);
//     }
// }