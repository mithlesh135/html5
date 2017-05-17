var result = [];

this.addEventListener('message', processMessage);

function processMessage(e) {
    if (e.data === 'close') {
        this.close();
    } else {
        generateFibbonacci(e.data);
        postMessage(result);
    }
}

function generateFibbonacci(data) {
    var res = 0,
        prevRes = 0,
        mostPrev = 0;
    for (var i = 0; i < data; i++) {
        if (i > 1) {
            res = prevRes + mostPrev;
        } else if (i === 1) {
            res = 1;
        }
        mostPrev = prevRes;
        prevRes = res;
        result.push(res);
    }
}
