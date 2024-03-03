let milli = 0; // Milliseconds elapsed
let sec = 0; // Seconds elapsed
let min = 0; // Minutes elapsed
let hr = 0; // Hours elapsed

let timer = false; // Flag to track whether the timer is running

// Function to start the timer
function start() {
   timer = true; // Set the timer flag to true
   myFun(); // Start the myFun() function
}

// Function to stop the timer
function stop() {
   timer = false; // Set the timer flag to false
   myFun(); // Call myFun() to update the timer display
}

// Function to reset the timer
function reset() {
   location.reload(); // Reload the page to reset all variables
}

// Function to manage the timer display and incrementing
function myFun() {
   if (timer == true) { // Check if the timer is running
       milli = milli + 1; // Increment the milliseconds

       if (milli == 100) { // If 100 milliseconds have passed
           sec = sec + 1; // Increment the seconds
           milli = 0; // Reset the milliseconds
       }

       if (sec == 60) { // If 60 seconds have passed
           min = min + 1; // Increment the minutes
           sec = 0; // Reset the seconds
       }

       if (min == 60) { // If 60 minutes have passed
           hr = hr + 1; // Increment the hours
           min = 0; // Reset the minutes
       }

       // Store current values of seconds, minutes, and hours in variables with "get" prefix
       let getSec = sec;
       let getMin = min;
       let getHr = hr;

       // Add leading zero if the value of seconds, minutes, or hours is less than 10
       if (sec < 10) {
           getSec = "0" + sec;
       }
       if (min < 10) {
           getMin = "0" + min;
       }
       if (hr < 10) {
           getHr = "0" + hr;
       }

       // Call the myFun() function again after 10 milliseconds
       setTimeout("myFun()", 10);

       // Update the timer display elements in the HTML document
       document.getElementById("milli").innerHTML = milli;
       document.getElementById("sec").innerHTML = getSec;
       document.getElementById("min").innerHTML = getMin;
       document.getElementById("hr").innerHTML = getHr;
   }
}