module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (typeof arr !== "object"){return 0;}
        return 1 + (arr.reduce((max, item) => Math.max(this.calculateDepth(item), max), 0) );
    }
};
