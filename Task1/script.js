function convert() {
  let inputValue = document.getElementById("inputTemp").value;
  let inputUnit = document.getElementById("inputUnit").value;
  let outputUnit = document.getElementById("outputUnit").value;
  let outputField = document.getElementById("outputTemp");

  if (isNaN(inputValue) || inputValue === "") {
    outputField.value = "Invalid!";
    return;
  }

  let temp = parseFloat(inputValue);
  let celsius;


  if (inputUnit === "C") {
    celsius = temp;
  } else if (inputUnit === "F") {
    celsius = (temp - 32) * 5 / 9;
  } else if (inputUnit === "K") {
    celsius = temp - 273.15;
  }

  let result;

 
  if (outputUnit === "C") {
    result = celsius;
  } else if (outputUnit === "F") {
    result = (celsius * 9 / 5) + 32;
  } else if (outputUnit === "K") {
    result = celsius + 273.15;
  }

  outputField.value = result.toFixed(2);
}
