function sortNumbers(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a);
            if (c > b) {
                console.log(c);
                console.log(b);
            } else {
                console.log(b);
                console.log(c);
            }
        } else {
            console.log(c);;
            console.log(a);
            console.log(b);
        }
    } else {
        if (b > c) {
            console.log(b);
            if (a < c) {
                console.log(c);
                console.log(a);
            } else {
                console.log(a);
                console.log(c);
            }
        } else {
            console.log(c);
            if (a > b) {
                console.log(a);
                console.log(b);
            } else {
                console.log(b);
                console.log(a);
            }
        }
    }
}


// sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2)
