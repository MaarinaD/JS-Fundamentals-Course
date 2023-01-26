function specialNumbers(number) {
    for(let i = 1; i <= number; i++) {
        let digitSum = 0;
        let leng = String(i).length;

        for(let j = 0; j < leng; j++) {
            let numsString = String(i);
            digitSum += Number(numsString[j]);
        }

        if(digitSum === 5 || digitSum === 7 || digitSum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(15);
console.log("-----------------------");
specialNumbers(20);
console.log("-----------------------");