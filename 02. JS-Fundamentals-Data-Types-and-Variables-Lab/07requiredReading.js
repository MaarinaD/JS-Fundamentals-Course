function reading(pages, pagesPerHour, days) {
    let totalTime = pages / pagesPerHour;
    let requiredHoursPerDay = totalTime / days;

    console.log(requiredHoursPerDay);
}

reading(212, 20, 2);
reading(432, 15, 4);