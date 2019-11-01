function tentukanDeretGeometri(arr){
    var temp;
    var arrPenampung = [];
    for(i=arr.length-1;i>0;i--){
        temp = (arr[i] / arr[i-1]);
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

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false