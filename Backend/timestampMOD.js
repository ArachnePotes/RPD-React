/*const today = new Date().toLocaleString() ;
const day7 = new Date(1691909037000).toLocaleString();
console.log(today,"-",day7)


const one = 1690952399*1000 // primero
const month = 1693457999*1000 // 30

const day1 = new Date(one).toLocaleString();
const day30 = new Date(month).toLocaleString();
console.log(day1,"-",day30)

const mon = month  - one
console.log('constante = ',mon,mon/2,mon/2)
const quinc = mon/2
const week = quinc/2
const Month_ago = Date.parse(today) - mon
const quinc_ago = Date.parse(today) - quinc
const week_ago = Date.parse(today) - week
const test1 = new Date(Month_ago).toLocaleString();
const test2 = new Date(quinc_ago).toLocaleString();
const test3 = new Date(week_ago).toLocaleString();
console.log('hace un mes',test1)
console.log('hace quince dias',test2)
console.log('hace una sem ',test3)

*/
//2505600000 1252800000 1252800000
/*
const today = new Date().toLocaleString() ;//locale string : 8/25/2023, 2:32:48 PM
const range = Date.parse(today);
const day = today.slice(2,4)
const month = today.slice(0,2).replace("/","")
const year = today.slice(5,9).replace("/","")
//const normal = new Date(range).toLocaleString()//.replace('/','-').replace('/','-').replace('AM','').replace(',',''); // aaaa-mm-dd hh-mm-ss
const cosa = year+"@"+month+"@"+day
console.log("cosa",cosa)
*/
const num = 1200000000/15
const time = "2505600000"
//const normal = new Date(range).toLocaleString()//.replace('/','-').replace('/','-').replace('AM','').replace(',',''); // aaaa-mm-dd hh-mm-ss
//const range = Date.parse(today) - 1200000000;//15 JAAJAJA
//const today = new Date().toLocaleString() ;//locale string : 8/25/2023, 2:32:48 PM
//const range = Date.parse(today);
const today = new Date().toLocaleString();
//const range2 = Date.parse(today) - 80000000*parseInt("32");//MES
//const range2 = Date.parse(today) - 80000000*parseInt("16");//15 dias
const range2 = Date.parse(today) - 80000000*parseInt("8");//7 dias
const result = new Date(range2).toLocaleString()
const day = result.slice(2,4)
const month = result.slice(0,2).replace("/","")
const year = result.slice(5,9).replace("/","")
const cosa = year+"@"+month+"@"+day

console.log("cosa",cosa)