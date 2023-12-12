let batteryPromise = navigator.getBattery();
let batarea = document.getElementById('batarea')
batteryPromise.then((batteryObject) => {
    let Level = (("Percentage", batteryObject.level) * 100).toFixed()
    if(20 > Level && 10 <= Level){
        document.querySelector('#batarea').style.backgroundColor = 'orange'
    } else if(Level < 10){
        document.querySelector('#batarea').style.backgroundColor = 'red'
    }
    batarea.innerText = Level
});


const dayTime = () => {
const time = new Date()

const hour = time.getHours()
const minute = time.getMinutes()
const seconds = time.getUTCSeconds()
const year = time.getFullYear()
const month = time.getMonth()
const day = time.getDay()

const clock = document.getElementById('clock')
const newclock = document.getElementById('clocks')
const dates = document.getElementById('dates')
newclock.textContent = `${hour}:${minute}:${seconds}`
dates.textContent = `${year}/${month}/${day}`
clock.textContent = `${hour}:${minute}`;
};

setInterval(()=> dayTime(), 1000);




function clock() {
    document.querySelector('.icons').style.display = 'none';
    document.querySelector('.topp').style.display = 'none';
    document.querySelector('.clock_date').style.display = 'block';
}

function Close() {
    document.querySelector('.icons').style.display = 'flex';
    document.querySelector('.topp').style.display = 'flex';
    document.querySelector('.clock_date').style.display = 'none';
}