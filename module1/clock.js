// Kata URL:
// https://www.codewars.com/kata/clocky-mc-clock-face

function whatTimeIsIt (angle) {
  // if 360 degrees is 12 hours, each hour is 30 degrees (360 / 12 = 30)
  var decimalHours = angle / 30;

  // if we have something like 3.5 hours, separate the .5 part.
  // we can turn the .5 into 30 minutes if we multiply by 60
  var minutes = Math.floor(60 * decimalOnly(decimalHours));

  // we need to turn 3.5 hours into just 3 hours for displaying
  var hours = Math.floor(decimalHours);
  if (hours === 0) {
    hours = 12;
  }

  // display both numbers with zeroes and a ":" between them
  return zeroPad(hours) + ":" + zeroPad(minutes);
}

function zeroPad (number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}

// Extract the decimal part of the number by turning it into a string
// (otherwise precision is lost)
function decimalOnly (number) {
  var str = String(number);
  var dot = str.indexOf(".");
  if (dot === -1) {
    return 0;
  }
  var decimalStr = str.slice(dot);
  return Number(decimalStr);
}
