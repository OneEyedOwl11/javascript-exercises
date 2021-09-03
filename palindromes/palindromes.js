const palindromes = function (x) {
    let re = /[\W_]/g;

    let origin = x.toLowerCase().replace(re, '');
    let result = origin.split('').reverse().join('');

    if (origin == result) {
        return true;
    }

    else {
        return false
    }
};

module.exports = palindromes;
