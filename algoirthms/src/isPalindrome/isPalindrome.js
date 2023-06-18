/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, and false otherwise.
 */
function isPalindrome(str) {
    str = str.toLowerCase()
    for(i = 0; i < str.length; i++) {
        if (str[i] != str[str.length-(i+1)]){
            return false
        }
    }
    return true
}


    // return str == str.split('').reverse().join('')
module.exports = {
    isPalindrome
}