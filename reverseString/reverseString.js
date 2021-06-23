const reverseString = function(str) {
 let srtArray = str.split('');
 let reversedArr = srtArray.reverse();
 return reversedArr.join('');
};

module.exports = reverseString;



reverseString("banana")
