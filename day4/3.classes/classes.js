class Polygon {
    constructor (arr) {
        this.lengths = arr
    }
    perimeter () {
        let total = 0;
        for (let x in this.lengths) {
            total += this.lengths[x];
        }
        return total;
    }
}