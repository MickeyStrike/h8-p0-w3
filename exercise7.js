function hitungJumlahKata(kalimat){
    var jumlah;
    jumlah = kalimat.split(' ',kalimat.length)
    // console.log(jumlah[0])
    var temp=0;
    for(i=0;i<=jumlah.length-1;i++){
        // console.log(jumlah[i] + (i+1));
        temp = (i+1);
    }
    return temp;
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5