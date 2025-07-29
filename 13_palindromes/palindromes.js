const palindromes = function (str) {
    let ltr = "";
    let rtl = "";
    for (let i = 0; i < str.length; ++i) {
        if (((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9")))
            ltr = ltr + str[i];
        }
    for (let i = str.length; i >= 0; --i) {
        if ((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9"))
            rtl = rtl + str[i];
        }
    if (rtl.toLowerCase() === ltr.toLowerCase()) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
