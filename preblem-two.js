const functn=perams=>{
    let newArray = [];
    for(const peram of perams){
        if(peram.length%2==0){
            newArray.push(peram)
        }
        
    }
    return newArray;
}
const array= ['ami' ,'tumi', 'she', 'hulo' ,'halum']
const result =  functn(array);
console.log(result);