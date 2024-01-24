class findOdd{
    constructor(){
        this.numbers = [13, 9, 8, 6, 4, 9, 15,7]
    }
    isOdd(){
        for (let i = 0; i < this.numbers.length; i++) {
          if (this.numbers[i] % 2 === 1) {
            console.log("odd numbers = ", this.numbers[i]);
          }         
        }
    }
}

let data = new findOdd();
data.isOdd();