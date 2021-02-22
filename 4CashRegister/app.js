/**
 * 
 * @param {number} price 
 * @param {number} cash 
 * @param {*} cid 
 */
function checkCashRegister(price, cash, cid) {
    const val = {
        "PENNY": {cash:0,val:0.01},
        "NICKEL": {cash:0,val:0.05},
        "DIME": {cash:0,val:0.1},
        "QUARTER": {cash:0,val:0.25},
        "ONE": {cash:0,val:1},
        "FIVE": {cash:0,val:5},
        "TEN": {cash:0,val:10},
        "TWENTY": {cash:0,val:20},
        "ONE HUNDRED": {cash:0,val:100},
    }
    cid.forEach(v=>val[v[0]].cash=v[1]);
    let change= cash - price;
    
    const ret = [];
    [
        "ONE HUNDRED",
        "TWENTY",
        "TEN",
        "FIVE",
        "ONE",
        "QUARTER",
        "DIME",
        "NICKEL",
        "PENNY"
    ].forEach(v=>{
        const c = Math.trunc(change/val[v].val);
        if(c!=0){
            let nv = c*val[v].val
            nv = nv<=val[v].cash?nv:val[v].cash
            val[v].cash -= nv;
            change -= nv;
            change = Number(change.toFixed(2));
            ret.push([v,nv])
        }
    })
    if(change >0)
        return {status: "INSUFFICIENT_FUNDS", change: []}
    if(Object.keys(val).every(k=>val[k].cash==0)){
        const clo = Object.keys(val).map(k=>ret.find(c=>c[0]==k)||[k,0]);
        return {status: "CLOSED", change: clo}
    }
    return {status: "OPEN", change:ret};
  
}
  
const ret =  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log();