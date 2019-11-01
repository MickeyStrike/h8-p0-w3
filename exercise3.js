function dataHandling(input){
    var save = [input];
    var id = '';
    var nama = '';
    var ttl = '';
    var tl = '';
    var hobi = '';
    var hasil = '';
    var hasil2 = '';
    // console.log(save)
        for(i=0;i<=save.length-1;i++){
            save[i];
            // console.log(save[i])
            for(j=0;j<=save[i].length-1;j++){
                save[i][j];
                for(k=0;k<=save[i][j].length-1;k=k+save[i][j]){
                    id=save[i][j][k=0];
                    nama=save[i][j][k=1];
                    ttl=save[i][j][k=2];
                    tl=save[i][j][k=3];
                    hobi=save[i][j][k=4];
                    hasil = 'Nomor ID: '+id+'\nNama Lengkap: '+nama+'\nTTL: '+ttl.concat(' ',tl)+'\nHobi: '+hobi+'\n\n';
                    hasil2+=hasil;
                }
            }   
        }
        return `${hasil2}`;
    }

console.log(dataHandling(input =[
                                    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                                    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                                    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                                    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
                                ]));