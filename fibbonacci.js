function generateFibbonacci(data) {
    var res = 0,
        prevRes = 0,
        mostPrev = 0;
    for (var i = 0; i < data; i++) {
        if (i > 1) {
            res = prevRes + mostPrev;
            console.log(res);
        } else if (i === 1) {
            res = 1;
        }
        mostPrev = prevRes;
        prevRes = res;
    }
}

generateFibbonacci(10);
