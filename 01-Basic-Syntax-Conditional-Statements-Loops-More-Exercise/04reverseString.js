function reverseString(string) {
    for (let i = 0; i >= 0; i--) {
        console.log(string.split("").reverse().join(""));
    }

}

reverseString("Hello");
console.log("-------------");
reverseString("SoftUni");
console.log("-------------");
reverseString("1234");