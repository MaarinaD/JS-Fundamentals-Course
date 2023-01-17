function triangleOfNumbers(num) {

    for(let row = 1; row <= num; row++){
        let buff = "";
        for(let col = 0; col < row; col++) {
            buff += row + " ";
        }

        console.log(buff);
    } 
    
}

triangleOfNumbers(3);
console.log("----------------");
triangleOfNumbers(5);
console.log("---------------------------");
triangleOfNumbers(6);