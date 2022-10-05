//Input
const firstName = prompt("Come ti chiami?");
console.log(firstName);
const surName = prompt("Il tuo cognome?");
console.log(surName, typeof(surName));
const color = prompt("Il tuo colore preferito?");
console.log(color);
 

//Svolgimento
const number = "21"
// Prima possibilità
/* const definition = `${firstName}${surName}${color}${number}`;
console.log(definition); */
const definition = firstName + surName + color + number;
console.log(definition);

//Output
document.getElementById("user").innerHTML = definition;