// Global variables
var currentDayEl = document.querySelector("#currentDay");







// Make current day display in the header's p element
currentDayEl.textContent = moment().format('dddd, MMMM Do YYYY');





// Create new variable for the current hour (military time)
var currentHour = moment().format('H');
var blockHour = document.querySelectorAll(".text-area.value");

console.log(currentHour);
console.log(blockHour);



// Apply new class background colors to text areas if they are in the past, present or future
