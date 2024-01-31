class stack {
    constructor() {
        this.str = "yashika"
        this.array = [];
        this.head = 0;
        this.tail = this.array.length - 1;
    }
    push() {
        if (this.str == 0) {
            console.log("pls fill the string");
        }
        else {
            for (let i = 0; i < this.str.length; i++) {
                // this.array.push(this.str[i])
                this.array[this.array.length] = this.str[i];
            }
            this.tail = this.array.length - 1;
        }
    }
    rvereseArray() {
        if (this.array == 0) {
            console.log("stack is underflow");
        }
        else {
            let temp = [];
            for (let i = this.tail; i >= this.head; i--) {
                // temp.push(this.array[i])
                temp[temp.length] = this.array[i];
            }
            this.array = temp;

        }
    }
    print() {
        console.log(this.array);
    }
}
var data = new stack();

data.push();
data.rvereseArray();
data.print();