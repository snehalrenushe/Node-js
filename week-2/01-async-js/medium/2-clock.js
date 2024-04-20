// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->

clock();

function clock() {
  const currentDateTime = new Date();
  //   console.log(currentDateTime);

  let currentHour = currentDateTime.getHours();
  let currentMin = currentDateTime.getMinutes();
  let currentSec = currentDateTime.getSeconds();

  let amOrPm = currentHour >= 12 ? " PM " : " AM ";

  console.log(currentHour + ":" + currentMin + ":" + currentSec + amOrPm);

  setTimeout(clock, 1000);
}
