
function getValues() {
  var sideA = parseInt(document.getElementById('sideA').value);
  var sideB = parseInt(document.getElementById('sideB').value);
  var sideC = parseInt(document.getElementById('sideC').value);
  var sides = [sideA, sideB, sideC]


  if ((sideA > (sideB + sideC)) || (sideB > (sideA + sideC)) || (sideC > (sideA + sideB))) {
    alert("This is an NOT a Triangle");
  }
  else if ((sideA === sideB) && (sideB === sideC)){
    alert("This is an Equilateral Triangle");
  } else if ((sideA === sideB) || (sideA === sideC) || (sideB === sideC)) {
    alert("This is an Isosceles Triangle");
  } else if (sideA !== sideB && sideB != sideC && sideC != sideA) {
    alert("This is an Scalene Triangle");
  } else {
      return 0;
  }

}
