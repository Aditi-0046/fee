const newSection2 = document.createElement("section");
newSection2.id = "b";
newSection2.textContent = "Section 2";

// newSection2.classList.add("box");
// newSection2.classList.add("bg1");
newSection2.classList.add("box","bg1");

document.body.append(newSection2);
newSection2.style.color = "white";
newSection2.textContent += " 😃";

// document.body.prepend(newSection2);

const newSection3 = document.createElement("section");
newSection3.id = "c";
newSection3.classList.add("box","bg2");
document.body.append(newSection3);
// document.body.prepend(newSection3);
newSection3.classList.remove("bg1");
newSection3.textContent = "😃 Section 3 😃";
newSection3.style.backgroundColor = "rgb(5, 130, 23)";

newSection3.style.width = "14rem";
newSection3.style.height = "7rem";
// newSection3.style.cssText = "width: 20rem; height: 10rem; background-color: seaGreen;";

const section1 = document.getElementById("a");
document.body.insertBefore(newSection2, newSection3);

// newSection2.remove();
// document.getElementById("b").remove();
// newSection2.style.cssText = "color: black;font-size: 1rem;";

document.body.firstElementChild.style.color = "white";
document.body.lastElementChild.style.color = "white";

var firstElement = document.body.firstElementChild;
firstElement.style.fontSize = "1.25rem";
console.log(firstElement);

let lastElement = document.body.lastElementChild;
lastElement.style.fontSize = "1.5rem";
console.log(lastElement);

let middleElement = lastElement.previousElementSibling;
middleElement.style.fontSize = "2rem";

var firstElement = document.getElementById("a");
var firstElement = document.querySelector("#a");
var array = document.querySelectorAll("section");
array[2].style.width = "20rem";