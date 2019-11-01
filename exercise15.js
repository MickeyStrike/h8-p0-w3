function groupAnimals(animals){
    res = [];
    found = false;
    for(let i=0;i<animals.length;i++){
        for(let j=0;j<res.length;j++){
            if(animals[i][0]===res[j][0]){
                res[j].push(animals[i]);
                found = true;
            }
        }
        if(found===false){
            res.push([animals[i][0],animals[i]]);
        }
        // console.log(res)
    }
    
    for(let i = 0;i < res.length; i++){
        res[i] = res[i].slice(1)
    }
    return res.sort()
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil','unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] 