function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
                left[left.length] = array[i];
        }
        else {
            right[right.length] = array[i];
        }
    }
    result = quickSort(left)
    result = result.concat(pivot)
    result = result.concat(quickSort(right))

    return result;

};

let array = [1, 4, 66, 2, 5, 6, 7, 3, 80, 99];
console.log(quickSort(array));