function AddWorkTime() {
  let currentDate = "01-01-2020";
  let startTime = "8:00";
  let endTime = "16:00";
  timetable.innerHTML += `<div class="timestamp">${currentDate} ${startTime} - ${endTime}</div>`;
}
