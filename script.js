const nextXmasDate = (currentTime) => {
  let xmasDate = new Date(currentTime.getFullYear() + "-12-25T00:00:00");
  if (currentTime.getTime() > xmasDate.getTime()) {
    let nextYear = currentTime.getFullYear() + 1;
    xmasDate = new Date(nextYear + "-12-25T00:00:00");
  }
  return xmasDate;
};

const updateCounter = () => {
  let currentTime = new Date();
  let difference = nextXmasDate(currentTime) - currentTime;
  let days = Math.floor(difference / 1000 / 60 / 60 / 24);
  let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(difference / 1000 / 60) % 60;
  let seconds = Math.floor(difference / 1000) % 60;

  console.log({ days: days, hours: hours, minutes: minutes, seconds: seconds });
};

setInterval(updateCounter, 1000);
