function printAndSum(a, b) {
    let sumNums = 0;
    let result = "";

    for(let i = a; i <= b; i++) {
        result += i + " "
        sumNums += i;
    }

    console.log(result);
    console.log(`Sum: ${sumNums}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);