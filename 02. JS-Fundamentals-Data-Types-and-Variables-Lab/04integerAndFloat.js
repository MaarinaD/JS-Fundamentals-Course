function intAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    // First way
    // if(sum % 1 === 0) {
    //     console.log(`${sum} - Integer`);
    // } else {
    //     console.log(`${sum} - Float`);
    // }

    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum);

}

intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);