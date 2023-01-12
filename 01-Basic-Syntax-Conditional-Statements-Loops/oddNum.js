function sumOfOddNum(num) {
    let sumNum = 0;

    for (let i = 1; i <= num * 2; i += 2) {
        console.log(i);
        sumNum += i;
    }

    console.log(`Sum: ${sumNum}`);
}

sumOfOddNum(5);