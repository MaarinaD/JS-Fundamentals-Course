function sumDigits(number) {
    let sum = 0;
    let numberToString = String(number);

    for(let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
    }

    console.log(sum);
}

sumDigits(245678);