function echoTypes(param) {
    let string = typeof param;
    console.log(string);

    if(string === "string" || string === "number") {
        console.log(param);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}

echoTypes('Hello, JavaScript!');
console.log("--------------");
echoTypes(18);
console.log("--------------");
echoTypes(null);