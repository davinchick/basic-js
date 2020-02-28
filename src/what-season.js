module.exports = function getSeason( date ) {
    if (!date) { return 'Unable to determine the time of year!';}
    if (Object.keys(date).length > 0) { throw new Error();}
    let fourSeasons = {
        winter: [11, 0, 1],
        spring: [2, 3, 4],
        summer: [5, 6, 7],
        autumn: [8, 9, 10]
    };
    let month = date.getMonth();

    for (let season in fourSeasons) {
        if (fourSeasons[season].includes(month)) {
            return season;
        }
    }
};
