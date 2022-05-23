// console.log("works");



function calculate() {

    const height = document.getElementById('height');
    const age = document.getElementById('age');
    const weight = document.getElementById('weight');
    const activity = document.getElementById('list').value;
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let totalCaloriesOutput = document.getElementById('totalCaloriesOutput');
    let baseCaloriesOutput = document.getElementById('baseCaloriesOutput');
    let joule = document.getElementById('joule');

    // if(male.checked == true) {
    //     console.log('funktioniert');
    // }

    if(male.checked == true) {
        baseCaloriesOutput.innerHTML = (664.7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(0) + 'Kcal';
    }

    if(female.checked == true) {
        baseCaloriesOutput.innerHTML = (655.1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
    }

    if(male.checked == true && activity === "1") {
        // totalCaloriesOutput.value = 0.95 * (664,7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value)));
        // baseCaloriesOutput.innerHTML = (664,7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(0) + 'Kcal';
        totalCaloriesOutput.innerHTML = 0.95 * (664.7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(0) + 'Kcal';
    } else if(male.checked == true && activity === "2") {
        totalCaloriesOutput.innerHTML = 1.2 * (664.7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(0) + 'Kcal';
    } else if(male.checked == true && activity === "3") {
        totalCaloriesOutput.innerHTML = 1.5 * (664.7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(0) + 'Kcal';
    } else if(male.checked == true && activity === "4") {
        totalCaloriesOutput.innerHTML = 1.7 * (664.7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(0) + 'Kcal';
    } else if(male.checked == true && activity === "5") {
        totalCaloriesOutput.innerHTML = 1.9 * (664.7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(0) + 'Kcal';
    } else if(male.checked == true && activity === "6") {
        totalCaloriesOutput.innerHTML = 2.2 * (664.7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value))).toFixed(2) + 'Kcal';
    }

    if(female.checked == true && activity === "1") {
        // totalCaloriesOutput.value = 0.95 * (664,7 + (13.7 * (weight.value)) + (5 * (height.value)) - (6.8 * (age.value)));
        // baseCaloriesOutput.innerHTML = (655,1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
        totalCaloriesOutput.innerHTML = 0.95 * (655.1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
    } else if(female.checked == true && activity === "2") {
        totalCaloriesOutput.innerHTML = 1.2 * (655.1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
    } else if(female.checked == true && activity === "3") {
        totalCaloriesOutput.innerHTML = 1.5 * (655.1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
    } else if(female.checked == true && activity === "4") {
        totalCaloriesOutput.innerHTML = 1.7 * (655.1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
    } else if(female.checked == true && activity === "5") {
        totalCaloriesOutput.innerHTML = 1.9 * (655.1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
    } else if(female.checked == true && activity === "6") {
        totalCaloriesOutput.innerHTML = 2.2 * (655.1 + (9.6 * (weight.value)) + (1.8 * (height.value)) - (4.7 * (age.value))).toFixed(0) + 'Kcal';
    }
}