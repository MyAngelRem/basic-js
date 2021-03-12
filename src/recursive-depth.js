module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    if (Array.isArray(arr)) {
      let max = 0;
      arr.forEach(arr => {
        const n = this.calculateDepth(arr);
        if (n > max) max = n;
      });
      depth = max + 1;
    }

    return depth;
  }
};