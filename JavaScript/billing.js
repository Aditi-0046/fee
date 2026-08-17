console.clear();

console.log("Billing System");
console.log();
prices.push(300,3500);
console.log("SrNo.\t","Item\t","Price");
for(let i =0;i<items.length;i++){
    console.log((i+1)+"\t",items[i],"\t",prices[i]);
}
console.log();



const prompt = require('prompt-sync')();
const store ="Rambo store";
let item = Number(prompt("Enter Item no. :"));
let item = Number(prompt("Enter Quantity :"));

// BILLING
let price = prices[srno-1];
let cost = price*quantity;
console.log("your bill amount is:",cost);

console.log();