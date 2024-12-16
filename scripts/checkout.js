import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import isSatSun from './exerciese/15-exercise.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import '../data/car.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/backend-practice.js'


Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});

/*
new Promise(( resolve ) => {
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value)
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then (() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});
*/

 
/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
        renderCheckoutHeader();
    });
});
*/