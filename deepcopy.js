function copy(src, destination) {
    if (!destination) {
        destination = {};
    }
    for (var i in src) {
        if (src[i] instanceof Array) {
            for (var j = 0, len = src[i].length; j < len; j++) {
                copy(src[i][j], {});
            }
        } else if (src[i] instanceof Object) {
            copy(src[i], {});
        }
        destination[i] = src[i];
    }
    return destination;
}
