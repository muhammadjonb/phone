let batteryPromise = navigator.getBattery();
let batarea = document.getElementById("batarea");
batteryPromise.then((batteryObject) => {
  let Level = (("Percentage", batteryObject.level) * 100).toFixed();
  if (20 > Level && 10 <= Level) {
    document.querySelector("#batarea").style.backgroundColor = "orange";
  } else if (Level < 10) {
    document.querySelector("#batarea").style.backgroundColor = "red";
  }
  batarea.innerText = Level;
});

// const dayTime = () => {
//   const time = new Date();

//   const hour = time.getHours();
//   const minute = time.getMinutes();
//   const seconds = time.getUTCSeconds();
//   const year = time.getFullYear();
//   const month = time.getMonth();
//   const day = time.getDay();

//   const clock = document.getElementById("clock");
//   const newclock = document.getElementById("clocks");
//   const dates = document.getElementById("dates");
//   newclock.textContent = `${hour}:${minute}:${seconds}`;
//   dates.textContent = `${year}/${month}/${day}`;
//   clock.textContent = `${hour}:${minute}`;
// };

// setInterval(() => dayTime(), 1000);

function clock() {
  document.querySelector(".icons").style.display = "none";
  document.querySelector(".topp").style.display = "none";
  document.querySelector(".clock_date").style.display = "block";
}

function Close() {
  document.querySelector(".icons").style.display = "flex";
  document.querySelector(".topp").style.display = "flex";
  document.querySelector(".clock_date").style.display = "none";
}

const currentTime = document.querySelector(".h2");
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector(".btnAlarm");

let alarmTime;
let isAlarmSet = false;
let ringtone = new Audio('../img/audio/mixkit-classic-alarm-995.wav');
for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option> `;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option> `;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option> `;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h == 0 ? h = 12 : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
  if (alarmTime == `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = '';
    ringtone.pause();
    content.classList.remove('disable')
    setAlarmBtn.innerText = 'Sat Alarm'
    return isAlarmSet = false
  }
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

  if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
    return alert('Please, select a valid time  to set Alarm!')
  }
  isAlarmSet = true;
  alarmTime = time
  content.classList.add('disable')
  setAlarmBtn.innerText = 'Clear Alarm'
}
setAlarmBtn.addEventListener("click", setAlarm);
