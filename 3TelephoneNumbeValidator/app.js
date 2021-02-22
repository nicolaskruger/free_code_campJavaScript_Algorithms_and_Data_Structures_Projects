/**
 * 
 * @param {String} str 
 */
function telephoneCheck(str) {
    return /^1?\s?((\(\d{3}\)|\d{3})(\s|-)?){2}\d{4}$/.test(str);
}
  
const test =  telephoneCheck("1 555-555-5555");
console.log();