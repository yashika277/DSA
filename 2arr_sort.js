const arr1 = [1, 5, 4];
const arr2 = [1, 7, 2];
let finalArr = [];
for (i = 0; i < arr1.length; i++) {
    finalArr[i] = arr1[i];
}
for (j = 0; j < arr2.length; j++) {
    finalArr[j + arr1.length] = arr2[j];
}
for (k = 0; k < finalArr.length; k++) {
    for(let a=k+1; a<finalArr.length; a++){
        if(finalArr[k]>finalArr[a]){
            let temp=finalArr[k];
            finalArr[k]=finalArr[a];
            finalArr[a]=temp;
        }
    }
}
console.log(finalArr);