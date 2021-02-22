/**
 * 
 * @param {string} str 
 */
function correct(str){
    return /[^A-Z]/.test(str)?str: str<'N'? String.fromCharCode(str.charCodeAt(0) + 13):
            String.fromCharCode(str.charCodeAt(0) - 13)
}
/**
 * 
 * @param {string} str 
 */
function rot13(str) {

    return str.split('')
                .map(correct)
                .join('');
}
  
const val =  rot13("SERR PBQR PNZC");
console.log();