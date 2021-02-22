/**
 * 
 * @param {string} str 
 */
function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const a  = str.substr(0,(str.length)/2);
    const b  = str.substr((str.length+1)/2).split('').reverse().join('');
    
    return a==b;
  }
  
  
  
let ret = palindrome("1 eye for of 1 eye.");
console.log();