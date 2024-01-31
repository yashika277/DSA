class peakele {
    constructor() {
        this.array = [20, 90, 4, 5, 56, 7, 98, 18, 12, 40, 21, 50, 30]
    }
    findmin() {
        let min = this.array[0];
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] < min)
                min = this.array[i];
        }
        console.log(min);
    }
}
let data = new peakele();
data.findmin()