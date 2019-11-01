function pasanganTerbesar(num){
    var strNum = ''+num;
    var max=0;
    var temp;    
    for(i=0;i<strNum.length;i++){
        temp = Number(strNum[i] + strNum[i+1])
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

console.log(pasanganTerbesar(645173)); //73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99