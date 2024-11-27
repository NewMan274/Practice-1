import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import isSatSun from './exerciese/15-exercise.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';

renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();

let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(4, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(6, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));