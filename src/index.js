module.exports = function reverse (n) {
    const string = String(Math.abs(n));
    let reversedString = '';
    for (let i = string.length - 1; i >=0; i--) {
        reversedString += string[i];
    }

    const reversedNumber = Number(reversedString);

    return reversedNumber;
  
}
