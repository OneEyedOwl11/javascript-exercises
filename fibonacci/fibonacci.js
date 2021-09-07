const fibonacci = function(x) {
    if (parseInt(x) == 1 || parseInt(x) == 0) {
            return 1
        }
    else if (parseInt(x) > 1) {
        let num1 = 0;
        let num2 = 1;
        let sum;
    for (let i = 1; i < parseInt(x); i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        }
    return sum;
    }
    else {
        return "OOPS"
    }
};

module.exports = fibonacci;
