function rounding(a, b) {
    let firstNum = Number(a);
    let secondNum = Number(b);
    let num = 0;

    if(secondNum >= 0 && secondNum <= 15) {
        num = firstNum.toFixed(secondNum);
    } else {
        num = firstNum.toFixed(15);
    }

    console.log(parseFloat(num));
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);

