import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import isSatSun from './exerciese/15-exercise.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import '../data/car.js';
import { loadProducts } from '../data/products.js';
//import '../data/backend-practice.js'

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});
