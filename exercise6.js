function angkaPalindrome(num){
    num+=1;
    if(num >= 0 && num<=9){
        return num;
    }
    else{
        while(true){
            var save = num;
            newNum = 0;
            while(save!=0){
                newNum = (newNum * 10) + (save%10)
                save = Math.trunc(save/10)
            }
            // console.log("newnum ", newNum, ", save ", save);
            if(newNum===num){
                break;
            }
            num++;
        }
        return num;
    }
}

console.log(angkaPalindrome(8)) //9
console.log(angkaPalindrome(10)) //11
console.log(angkaPalindrome(117)) //121
console.log(angkaPalindrome(175)) //181
console.log(angkaPalindrome(1000)) //1001