/**
 *  
 * 
 * @param {number[]} arr - An array of integers to sort.
 * @returns {number[]} - A partialy sorted array where the largest element has 'bubbled' up to the end of the array.
 */
<<<<<<< HEAD
// we need to compare the first item to the next, and then swap them if they're out of order;
    // we then coninue to do this until we have reached the end of the array
    
const bubbleSortOnce = (arr) => {
    // were gonna need a loop    
    for (let i = 0; i < arr.length; i ++) {
        // [2,1,3]
        // compare the current item to the next in line
        // IF the current item is GREATER THAN the next
            // 3               1
        if (arr[i] > arr[i+1]) {
            // SWAP THEM 
            let temp = arr[i]; // 3 
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    } 
    return arr
        // do nothing - keep going
=======

const bubbleSortOnce = (a) => {
let newArray = a;
    for (let i = 0; i < a.length-1; i++){
        let first = a[i]
        let second = a[i+1]
        if(first > second) {
            a[i] = second;
            a[i+1] = first;
        }
    }
   return newArray
>>>>>>> a90fa9c (bubblesort)
}
//[3,5,6,7,2,8]
console.log(bubbleSortOnce([5, 3, 8, 6, 7, 2]))
module.exports = { bubbleSortOnce };