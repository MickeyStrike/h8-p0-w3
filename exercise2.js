// function balikKata(word){
//     var words = [word];
//     var strWord = words.join();
//     var tempWord = '';
//     var wordd = [];
//     for(var i = strWord.length-1;i>=0;i--){
//         tempWord+=strWord[i];
//     }
//     wordd.push(tempWord);
//     return wordd;
// }

// console.log(balikKata('Hello World'))
// console.log(balikKata("Irfan Maulana"))

function balikKata(word){
    var words = [word];
    var strWords = '';
    var wordd = [];
    for(var i = 0; i<=words.length-1;i++){
        words[i];
        for(var j=words[i].length-1;j>=0;j--){
            strWords += words[i][j];
            // console.log(words[i][j])
            // console.log(strWords)
        }
    }
    wordd.push(strWords);
    return wordd;
}

console.log(balikKata('Hello World'))