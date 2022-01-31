var calc = require('./calculator.js')

// Addition
if (calc.add(5,2) == 7) {
    console.log("add(5, 2) expected result 7 PASS")
}
if (calc.add(5,2) != 8) {
    console.log("add(5, 2) expected result 8 FAIL\n")
}

//subtraction
if (calc.sub(5,2) == 3) {
    console.log("sub(5, 2) expected result 3 PASS")
}
if (calc.sub(5,2) != 5) {
    console.log("sub(5, 2) expected result 5 FAIL\n")
}

//multiplication
if (calc.mul(5,2) == 10) {
    console.log("mul(5, 2) expected result 10 PASS")
}
if (calc.mul(5,2) != 12) {
    console.log("mul(5, 2) expected result 12 FAIL\n")
}

//division
if (calc.div(10,2) == 5) {
    console.log("div(10, 2) expected result 5 PASS")
}
if (calc.div(10,2) != 2) {
    console.log("div(10, 2) expected result 2 FAIL")
}