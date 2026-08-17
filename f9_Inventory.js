console.clear();
console.log("Inventory Entry System");
console.log();

const prompt = require("prompt-sync")();

let stock = [];

function addstock() {
    let item_code = Number(prompt("Enter Item Code: "));
    let item_name = prompt("Enter Item Name: ");
    let item_price = Number(prompt("Enter the price: "));
    let item_Quantity = Number(prompt("Enter Quantity: "));

    // Object is a collection of property-value pairs
    let item = {
        code: item_code,
        item: item_name,
        price: item_price,
        quantity: item_Quantity
    };

    stock.push(item);

    console.log("\nInventory updated");
    console.log();
}

while (true) {
    addstock();

    let loop = prompt("Add More Items (0 for NO / 1 for Yes): ");
    loop = parseInt(loop);

    if (loop === 0)
        break;
}

console.log("\nInventory Entry Completed");
console.log("\nUpdated Stock is as follows");
console.log(stock);