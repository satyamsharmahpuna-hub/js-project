// Focus Timer Logic
let timeLeft = 1500; // 25 minutes
let timerInterval;
let isRunning = false;

function toggleTimer() {
    const btn = document.getElementById('timerBtn');
    if (isRunning) {
        clearInterval(timerInterval);
        btn.innerText = "Start Session";
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        btn.innerText = "Pause";
    }
    isRunning = !isRunning;
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById('timer').innerText = 
        `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Time is up! Take a break.");
    } else {
        timeLeft--;
    }
}

// Task Manager Logic
function addTask() {
    const input = document.getElementById('taskIn');
    const list = document.getElementById('taskList');
    
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.innerHTML = `${input.value} <span onclick="this.parentElement.remove()" style="cursor:pointer; color:red;">×</span>`;
        list.appendChild(li);
        input.value = "";
    }
}