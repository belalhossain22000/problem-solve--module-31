const arroFctn = preams => {
    let sum = 0;
    for (const peram of preams) {
      sum +=Math.pow(peram,2);
    }
   return sum/preams.length;
  }
  
  const numbers = [2, 3, 4];
 console.log( arroFctn(numbers)); 
  