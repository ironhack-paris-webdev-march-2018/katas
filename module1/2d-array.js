// Kata URL:
// https://www.codewars.com/kata/sort-a-2d-array

function namesSorter (departmentsArray) {
  var arr =
    departmentsArray.reduce(function (newArr, department) {
      // concat() combines two arrays into one mega array
      return newArr.concat(department);
    }, []);

  arr.sort(function (nameA, nameB) {
    // if the lengths are not the same, use the sorting numbers trick.
    if (nameA.length !== nameB.length) {
      return nameA.length - nameB.length;
    }

    // if the lengths are the same, compare the actual strings.
    // return negative number if the order can stay the same
    if (nameA < nameB) {
      return -1;
    }
    // return positive number if the order needs to change
    if (nameA > nameB) {
      return 1;
    }
  });

  return arr;
}
