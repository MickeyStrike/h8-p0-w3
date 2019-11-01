function mengelompokkanAngka(arr){
    var tmp=[];
    var tmpGenap=[];
    var tmpGanjil=[];
    var tmpK3=[];

    for(var i=0;i<arr.length;i++){
        if(arr[i]%3===0){
            tmpK3.push(arr[i]);
        }else if(arr[i]%2===1){
            tmpGanjil.push(arr[i]);
        }else if(arr[i]%2===0){
            tmpGenap.push(arr[i])
        }
    }
    tmp.push(tmpGenap, tmpGanjil, tmpK3)
    return tmp;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]