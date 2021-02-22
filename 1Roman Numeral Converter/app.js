/**
 * 
 * @param {string} one 
 * @param {string} five 
 * @param {string} ten 
 */
function converter(one,five,ten){
    return {
        1: one,
        2: one.repeat(2),
        3: one.repeat(3),
        4: one + five,
        5: five,
        6: five + one,
        7: five + one.repeat(2),
        8: five + one.repeat(3),
        9: one + ten
    }
}
/**
 * 
 * @param {number} num 
 */
function convertToRoman(num) {
    const strNum = num.toString();
    const nums = [
        ['I','V','X'],
        ['X','L','C'],
        ['C','D','M'],
        ['M','M','M'],
    ]
    return strNum.split('')
            .map((s,i)=>converter(...nums[strNum.length-1-i])[parseInt(s)])
            .join('');
}
   
let ret =   convertToRoman(36);

console.log();