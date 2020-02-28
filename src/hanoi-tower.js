module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var turn = Math.pow(2, disksNumber)-1;
    var second = turn/(turnsSpeed / 3600);

    return {
        turns: turn,
        seconds: second
    };
};
