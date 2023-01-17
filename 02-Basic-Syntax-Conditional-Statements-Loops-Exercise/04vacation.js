function vacation(group, type, day) {
    let price = 0;
    let totalPrice = 0;

    switch (day) {
        case "Friday":
            if(type === "Students") {
                price = 8.45;
            } else if (type === "Business") {
                price = 10.90;
            } else if(type === "Regular") {
                price = 15;
            }
            
            break;

        case "Saturday":
            if(type === "Students") {
                price = 9.80;
            } else if(type === "Business") {
                price = 15.60;
            } else if(type === "Regular") {
                price = 20;
            }

            break;

        case "Sunday":
            if(type === "Students") {
                price = 10.46;
            } else if (type === "Business") {
                price = 16;
            } else if(type === "Regular") {
                price = 22.50;
            }

            break;
            
    }

    totalPrice = group * price;

    if(group >= 30 && type === "Students") {
        totalPrice -= totalPrice * 0.15;
    }

    if (group >= 100 && type === "Business") {
        totalPrice = totalPrice - price * 10;
    }

    if(group >= 10 && group <= 20 && type === "Regular") {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday");

vacation(40,
    "Regular",
    "Saturday");