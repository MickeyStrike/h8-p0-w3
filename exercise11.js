function tentukanDeretAritmatika(arr){
    var temp;
    var arrPenampung = [];
    for(i=arr.length-1;i>0;i--){
        temp = (arr[i] - arr[i-1]);
        arrPenampung.push(temp);
        // console.log(arrPenampung)
    }
    for(j=arrPenampung.length-1;j>0;j--){
        if(arrPenampung[j]===arrPenampung[j-1]){
            j--;
        }else{
            return false;
        }
    }
    return true;
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false