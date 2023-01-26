function amazingNums(number) {
    number = number.toString();
    let sum = 0;

    for(let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    // First way
    // let result = sum.toString().includes('9');
    // console.log(result ? 
    //     `${number} Amazing? True` : 
    //     `${number} Amazing? False`);

    if (sum % 10 === 9) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

amazingNums(1233);
amazingNums(999);