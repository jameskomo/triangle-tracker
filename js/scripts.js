function getValues() {
  var val1 = (document.getElementById('side1').value);
  var val2 = (document.getElementById('side2').value);
  var val3 = (document.getElementById('side3').value);
  var sideA = parseInt(val1);
  var sideB = parseInt(val2);
  var sideC = parseInt(val3);


  if (sideA === sideB && sideB === sideC && sideA === sideC) {
    console.log('equilateral');
    document.write(side1);
    alert("This is an equilateral Triangle");
  } else if (sideA === sideB && sideB != sideC || sideA === sideC && sideC != sideB || sideB === sideC && sideC != sideA) {
    console.log('isosceles');
    alert("This is an Isosceles Triangle")
  } else if (sideA + sideB > sideC && sideA != sideB && sideB != sideC || sideA + sideC > sideB && sideA != sideB && sideB != sideC || sideC + sideB > sideA && sideA != sideB && sideB != sideC) {
    alert("This is a Scalene Triangle");
  } else if ((side1 == null || side1 === "") || (side2 == null || side2 === "")|| (side3 == null || side3 === "")) {
    alert("All sides required");
  } else {
    return 0;
  }
}
