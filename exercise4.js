function dataHandling2(input){
    var save = input;
    save.splice(1,1,'Roman Alamsyah Elsharawy')
    save.splice(2,1, 'Provinsi Bandar Lampung')
    save.splice(4,2, 'Pria', 'SMA Internasional Metro')
    // console.log(save);
    var bulan = save[3];
    var splitBulan = bulan.split('/');
    var stripBulan = '';
    stripBulan = splitBulan.join('-');
    // console.log(stripBulan);
    var strBulan = splitBulan[1];
    var strNama = save[1];
    var sliceNama = strNama.slice(0,15);
    // console.log(sliceNama)
    var month = '';
    // console.log(splitBulan)
    splitBulan.sort((a, b) => 1);
    // console.log(splitBulan);
    // var save2 = save.join()
    var save2 = [];
    for(i=0;i<=save.length-1;i++){
        save2.push(save[i])
        // console.log(save2)
    }
    // console.log(save2)
        switch(strBulan){
        case '01' :
                    month = `Januari`;
                break;
        case '02' :
                    month = 'Februari';
                break;
        case '03' :
                    month = 'Maret';
                break;
        case '04' :
                    month = 'April';
                break;
        case '05' :
                    month = 'Mei';
                break;
        case '06' :
                    month = 'Juni';
                break;
        case '07' :
                    month = 'Juli'
                break;
        case '08' :
                    month = 'Agustus'
                break;
        case '09' :
                    month = 'September'
                break;
        case '10' :
                    month = 'Oktober'
                break;
        case '11' :
                    month = 'November'
                break;
        case '12' :
                    month = 'Desember'
                break;
        default :
                    month = 'Data yang anda masukkan salah'
                break;
    }
    // console.log(month)
    // return `${save}\n${month}\n${splitBulan}\n${stripBulan}\n${sliceNama}`
    let finalResult = JSON.stringify(save)+'\n'+month+'\n'+JSON.stringify(splitBulan)+'\n'+stripBulan+'\n'+sliceNama
    return finalResult
}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]));
//"0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"