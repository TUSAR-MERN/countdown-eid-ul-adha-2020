// Initialize Some Variables
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// Countdown Function
function edUlAdha() {
    // Create Second, Minute, Hour, Day
    let sec = 1000;
    let min = sec * 60;
    let hr = min * 60;
    let dy = hr * 24;

    // Get End Date Time 
    let countDown = new Date('may 12, 2021, 00:00:00').getTime();
    // Get Now Date Time
    let today = new Date().getTime();
    // Calculate End date time - Now date time
    let gap = countDown-today;

    // CountDown
    let d = Math.floor(gap / (dy));
    let h = Math.floor((gap % (dy)) / (hr));
    let m = Math.floor((gap % (hr)) / (min));
    let s = Math.floor((gap % (min)) / (sec));

    // Show Output
    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}


// Countdown Event Handler
setInterval(() => {
    edUlAdha();
}, 1000);
