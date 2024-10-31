let counter = 0; // Initialize counter value
let intervalId; // To store the interval ID for start/stop control

// Function to start the counter
function startCounter() {
    // Only start if it's not already running
    if (!intervalId) {
        intervalId = setInterval(() => {
            counter++; // Increment counter
            document.getElementById('counter').innerText = counter; // Update counter display
        }, 1000); // Increment every second (1000 ms)
    }
}

// Function to stop the counter
function stopCounter() {
    clearInterval(intervalId); // Stop the interval
    intervalId = null; // Reset intervalId so counter can be restarted
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startCounter);
document.getElementById('stop').addEventListener('click', stopCounter);
