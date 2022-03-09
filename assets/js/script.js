// Global variables
var currentDayEl = document.querySelector("#currentDay");
var saveButton = document.querySelector(".save-button");
var tasks = [];



// Make current day display in the header's p element
currentDayEl.textContent = moment().format('dddd, MMMM Do YYYY');


// Create new variable for the current hour (military time)
var currentHour = moment().format('H');


// Create new variables & values for the scheduler hour blocks to compare to the current time variable
var hour9 = document.querySelector("#hour-nine");
hour9.value = 9;

var hour10 = document.querySelector("#hour-ten");
hour10.value = 10;

var hour11 = document.querySelector("#hour-eleven");
hour11.value = 11;

var hour12 = document.querySelector("#hour-twelve");
hour12.value = 12;

var hour1 = document.querySelector("#hour-one");
hour1.value = 13;

var hour2 = document.querySelector("#hour-two");
hour2.value = 14;

var hour3 = document.querySelector("#hour-three");
hour3.value = 15;

var hour4 = document.querySelector("#hour-four");
hour4.value = 16;

var hour5 = document.querySelector("#hour-five");
hour5.value = 17;



// Compare the current time to the schedule hours to apply colors for past, present or future

// 9AM conditionals
if (currentHour === hour9.value) {
    $("#text-area-nine").addClass("present");
}
else if (currentHour >= hour9.value) {
    $("#text-area-nine").addClass("past");
}
else if (currentHour <= hour9.value) {
    $("#text-area-nine").addClass("future");
};

// 10AM conditionals
if (currentHour === hour10.value) {
    $("#text-area-ten").addClass("present");
}
else if (currentHour >= hour10.value) {
    $("#text-area-ten").addClass("past");
}
else if (currentHour <= hour10.value) {
    $("#text-area-ten").addClass("future");
};

// 11AM conditionals
if (currentHour === hour11.value) {
    $("#text-area-eleven").addClass("present");
}
else if (currentHour >= hour11.value) {
    $("#text-area-eleven").addClass("past");
}
else if (currentHour <= hour11.value) {
    $("#text-area-eleven").addClass("future");
};

// 12PM conditionals
if (currentHour === hour12.value) {
    $("#text-area-twelve").addClass("present");
}
else if (currentHour >= hour12.value) {
    $("#text-area-twelve").addClass("past");
}
else if (currentHour <= hour12.value) {
    $("#text-area-twelve").addClass("future");
};

// 1PM conditionals
if (currentHour === hour1.value) {
    $("#text-area-one").addClass("present");
}
else if (currentHour >= hour1.value) {
    $("#text-area-one").addClass("past");
}
else if (currentHour <= hour1.value) {
    $("#text-area-one").addClass("future");
};

// 2PM conditionals
if (currentHour === hour2.value) {
    $("#text-area-two").addClass("present");
}
else if (currentHour >= hour2.value) {
    $("#text-area-two").addClass("past");
}
else if (currentHour <= hour2.value) {
    $("#text-area-two").addClass("future");
};

// 3PM conditionals
if (currentHour === hour3.value) {
    $("#text-area-three").addClass("present");
}
else if (currentHour >= hour3.value) {
    $("#text-area-three").addClass("past");
}
else if (currentHour <= hour3.value) {
    $("#text-area-three").addClass("future");
};

// 4PM conditionals
if (currentHour === hour4.value) {
    $("#text-area-four").addClass("present");
}
else if (currentHour >= hour4.value) {
    $("#text-area-four").addClass("past");
}
else if (currentHour <= hour4.value) {
    $("#text-area-four").addClass("future");
};

// 5PM conditionals
if (currentHour === hour5.value) {
    $("#text-area-five").addClass("present");
}
else if (currentHour >= hour5.value) {
    $("#text-area-five").addClass("past");
}
else if (currentHour <= hour5.value) {
    $("#text-area-five").addClass("future");
};




// Save Tasks Function
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}




// Save tasks to local storage when Save Buttons are clicked
saveButton.addEventListener("click", saveTasks);

