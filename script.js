var woord = "regenboog";
var splitwoord = woord.split("");

document.getElementById("btn").addEventListener("click", input);

function input() {

var invoer = document.getElementById("invoer").value;

for (let i = 0; i < 9; i++) {

var input = document.getElementById("input"+i);
input.innerHTML = invoer[i];
console.log( invoer[i] ==  splitwoord[i]);

if (invoer[i] == splitwoord[i]) {
	document.getElementById("input"+i).style.backgroundColor = "green";
}

else if (invoer[i] == "r" || invoer[i] == "e" || invoer[i] == "g" || invoer[i] == "n"|| invoer[i] == "b" || invoer[i] == "o"){
	document.getElementById("input"+i).style.backgroundColor = "orange";
}
else {
	document.getElementById("input"+i).style.backgroundColor = "red";
}

} // eind loop i

} // eind function input 

document.getElementById("opnieuw").addEventListener("click", opnieuw);

function opnieuw(){

var invoer = document.getElementById("invoer");
invoer.value = invoer.defaultValue;

const node = document.getElementById("lingo");
const clone = node.cloneNode(true);
document.getElementById("lingo2").appendChild(clone);

for (let e = 0; e < 9; e++) {
document.getElementById("input"+e).innerHTML = '';
document.getElementById("input"+e).style.backgroundColor = "white";

} // eind loop e

} // eind function opnieuw