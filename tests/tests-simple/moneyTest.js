import { formatCurrency } from "../../scripts/utils/money.js";

console.log('Test Suite: formatCurrency')

console.log('converts cents into dollars')
//Basic test case
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
};

console.log('works with zero')
//Edge case
if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('rounds up to the nearest cent')
//Edge case
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('rounds up to the nearest cent')
//Edge case
if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log('failed');
}