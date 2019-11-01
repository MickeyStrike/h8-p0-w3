function targetTerdekat(arr){
    var tmpO=0;
    var tmpX=[];
    var result;
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i])
        if(arr[i]==='o'){
            tmpO+=i
        }else if(arr[i]==='x'){
            tmpX.push(i)
        }
    }
    if(tmpX.length>0){
        for(var i = 0; i < tmpX.length;i++){
            if(tmpO>tmpX[i]){
                result = tmpO - tmpX[tmpX.length-1]
            }else{
                result = Math.abs(tmpX[0] - tmpO)
            }
        }
    }else{
        return 0;
    }
    return result
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2