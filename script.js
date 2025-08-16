// Normal Calculator
function press(char) {
  document.getElementById("display").value += char;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateNormal() {
  try {
    let result = math.evaluate(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

// Algebra Calculator
function calculateAlgebra() {
  try {
    let expr = document.getElementById("equation").value;
    let xVal = document.getElementById("xVal").value;
    let yVal = document.getElementById("yVal").value;
    let zVal = document.getElementById("zVal").value;

    let scope = {};
    if (xVal) scope.x = parseFloat(xVal);
    if (yVal) scope.y = parseFloat(yVal);
    if (zVal) scope.z = parseFloat(zVal);

    let result = math.evaluate(expr, scope);
    document.getElementById("result").innerText = "Result: " + result;
  } catch (err) {
    document.getElementById("result").innerText = "Error: " + err;
  }
}
