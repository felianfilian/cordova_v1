timetable.innerHTML = localStorage.getItem("timestamps");

function AddWorkTime() {
  let currentDate = myDate.value;
  let startTime = myStarttime.value;
  let endTime = myEndtime.value;
  timetable.innerHTML += `<div class="timestamp">${currentDate} | ${startTime} - ${endTime}</div>`;
  localStorage.setItem("timestamps", timetable.innerHTML);
}
