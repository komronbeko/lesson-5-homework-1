var name = prompt(`welcome! what's your name`);
var plan = prompt(`would you like to travel?`); 
var money = Number(prompt(`${name} how much money do you have?`));
if (money >= 11000000) {
    alert (`$(name), we wish the best in your travel!`);
}
else {
    alert(`sorry ${(name)}, you can't afford for this trip, we hope you can do it after earning some more.`);
    
}
