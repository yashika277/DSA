let array=[1,2,3,4,8,14,9,10,7];
let targetElement=10;

function linearSearch(arr,target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}
let result=linearSearch(array,targetElement);

if(result!== -1){
    console.log(`Element ${targetElement} found index ${result}`);
}
else{
    console.log(`Element ${targetElement} not found in the array`);
}