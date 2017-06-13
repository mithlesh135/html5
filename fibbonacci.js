function generateFibbonacci(data) {
    var res = 0,
        prevRes = 0,
        mostPrev = 0;
        
    for (var i = 0; i < data; i++) {
        if( i === 0) {
            res = 0;
        } else if (i > 2) {
            res = prevRes + mostPrev;
        } else if (i <= 2) {
            res = 1;
        } 
        console.log(res);
        mostPrev = prevRes;
        prevRes = res;
    }
}

generateFibbonacci(10);
