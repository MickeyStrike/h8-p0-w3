function palindrom(kata){
        var save = kata;
        var save2 = '';
    
        for(j=save.length-1;j>=0;j--){
            save2 += save[j];
            // console.log(save2)
        }
    
        if(save===save2){
            return true;
        }
        else{
            return false;
        }
    }
    
    console.log(palindrom('katak')) //true
    console.log(palindrom('blangket')) //false
    console.log(palindrom('civic')) //true
    console.log(palindrom('kasur rusak')) //true
    console.log(palindrom('mister')) //false