function pointsDistance(x1, y1, x2, y2) {
    let x = x2 - x1;
    let y = y2 - y1;

    let finalResult = Math.sqrt(x * x * y * y);

    console.log(finalResult);
}

pointsDistance(2, 4, 5, 0);
pointsDistance(2.34, 15.66, -13.55, -2.9985)