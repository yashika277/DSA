const arr=[0,6,5,3,2,90,35];
for (let i = 0; i < arr.length; i++) {
    // let swap=false;
  for (let j = 0; j < arr.length; j++) {
    if(arr[j]>arr[j+1]){
       
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        // swap=true;
    }
  }
//   if(swap==false){
//     break;
//   }
    
}
console.log(arr);
