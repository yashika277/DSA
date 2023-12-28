let arr=[66,21,23,2,5];
let target=23;
flag=0;
for(i=0; i<arr.length; i++){
    for (let j = i+1; j < arr.length; j++) {
       if (arr[i]+arr[j]==target) {
        console.log(i,j);
        flag=1;
       }  
    }
}
if(flag==0){
    console.log("not found");
}

