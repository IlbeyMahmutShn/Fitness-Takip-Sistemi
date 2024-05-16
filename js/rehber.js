const calculateBMIButton = document.getElementById("calculate-bmi");
const bmiResultDiv = document.getElementById("bmi-result");

calculateBMIButton.addEventListener("click", function () {
  const height = parseFloat(document.getElementById("height").value) / 100; // Boyu metre cinsine dönüştür
  const weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    bmiResultDiv.innerHTML = "<p>Lütfen geçerli boy ve kilo değerleri girin.</p>";
    return;
  }

  const bmi = calculateBMI(height, weight);
  const bmiCategory = getBMICategory(bmi);
  displayBMIResult(bmi, bmiCategory);
});

function calculateBMI(height, weight) {
  return weight / (height * height);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Zayıf";
  if (bmi < 24.9) return "Normal";
  if (bmi < 29.9) return "Fazla Kilolu";
  return "Obez";
}

function displayBMIResult(bmi, bmiCategory) {
  bmiResultDiv.innerHTML = `
  <p id = "sonuc">Vücut Kitle İndeksiniz (BMI): <strong>${bmi.toFixed(2)}</strong></p>
  <p id = "sonuc">Durum: <strong>${bmiCategory}</strong></p>
  `;
}