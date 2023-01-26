function place(str1, char, str2) {
    let result = str1.replace("_", char);
    let output = result === str2 ? "Matched" : "Not Matched";

    console.log(output);
}

place('Str_ng', 'I', 'Strong')
place('Str_ng', 'i', 'String')