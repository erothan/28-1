let weight = Number(prompt("Enter Your Weight(kg)"));
let height = Number(prompt("Enter Your Height(m)"));
let bmi = weight / (height * height);

console.log(bmi);

if (bmi >= 18.5 && bmi <= 25) {
    alert('your BMI is ' + bmi + '   Your bmi is normal.');
}

if (bmi > 25) {
    alert('your BMI is ' + bmi  + '  Your bmi is overweight.');
}

if (bmi < 18.5) { 
    alert('your BMI is ' +  bmi  + '  Your bmi is underweight.');
}
