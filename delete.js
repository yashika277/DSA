const arr = [11, 23, 46, 73, 99, 80];
const arr1=[];
// let length=arr.length-1;
for (let i = 0; i <arr.length-1; i++) {
    arr[i] = arr[i + 1];
    arr1[i]=arr[i];
}
console.log(arr1);