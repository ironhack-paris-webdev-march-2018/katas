// Kata URL:
// https://www.codewars.com/kata/tgi-friday

function lastDayIsFriday(initialYear, endYear) {
  if (endYear === undefined) {
    endYear = initialYear;
  }
  var fridays = 0;

  for (var year = initialYear; year <= endYear; year += 1) {
    // Months in JavaScript are 0-11
    // (Example: December is 11 instead of 12)
    for (var month = 0; month <= 11; month += 1) {
      // Day 0 of the NEXT month is the last day of the PREVIOUS month
      // (Example: January 0 is really December 31)
      var myDate = new Date(year, month + 1, 0);

      // Days of the week in JavaScript are 0-6
      // (Example: Saturday is 6 instead of 7)
      if (myDate.getDay() === 5) {
        fridays += 1;
      }
    }
  }

  return fridays;
}
