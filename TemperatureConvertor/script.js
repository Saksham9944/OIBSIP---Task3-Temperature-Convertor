document.getElementById("convert").onclick = tempconvert;
document.getElementById("reset").onclick = resetform;

function tempconvert() {
  let fah = document.getElementById("fahrenheit").value;
  let celcius = document.getElementById("celcius").value;

  if (fah != "") {
    celcius = (parseFloat(fah) - 32) / 1.8;
  } else {
    fah = parseFloat(celcius) * 1.8 + 32;
  }

  document.getElementById("fahrenheit").value = parseFloat(fah).toFixed(1);

  document.getElementById("celcius").value = parseFloat(celcius).toFixed(1);
}
function resetform() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celcius").value = "";
}
