function binarySearch(arr, l, r, x) {
    if (l > r) {
        return -1;
    }
    let mid = parseInt((l + r) / 2)

    if (arr[mid] == x) {
        return mid;
    }

    if (arr[mid] > x) {
        return binarySearch(arr, l, mid - 1, x);
    } else {
        return binarySearch(arr, mid + 1, r, x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 10 ;
let l = 0 ;
let n = arr.length - 1;
let result = binarySearch(arr, l, n, x);
if (result == -1) {
    console.log("Element is not in array ");
}
else {
    console.log("Element is index " + result);
}