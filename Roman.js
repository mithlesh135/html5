function RomanNumbers() {
    this.map = [{
        value: 1,
        symbol: 'I'
    }, {
        value: 4,
        symbol: 'IV'
    }, {
        value: 5,
        symbol: 'V'
    }, {
        value: 9,
        symbol: 'IX'
    }, {
        value: 10,
        symbol: 'X'
    }, {
        value: 40,
        symbol: 'XL'
    }, {
        value: 50,
        symbol: 'L'
    }, {
        value: 90,
        symbol: 'XC'
    }, {
        value: 100,
        symbol: 'C'
    }];
};

RomanNumbers.prototype.getRomanEquivalent = function (num) {
    var rem = 0,
        quotient = 0,
        res = '';

    if (num) {
        for (var i = 0, len = this.map.length; i < len; i++) {

            if(num === this.map[i].value) {
                return this.map[i].symbol;
            } else if (num < this.map[i + 1].value) {
                quotient = Math.floor(num / this.map[i].value);
                rem = num % this.map[i].value;

                
                for (var j = 0; j < quotient; j++) {
                    res += this.map[i].symbol;
                }

                res +=  this.getRomanEquivalent(rem) || '';
                return res;
            }
        }
    }
}

var rom = new RomanNumbers();


for(var i = 1; i <= 100; i++) {
    console.log(i, rom.getRomanEquivalent(i));
}
