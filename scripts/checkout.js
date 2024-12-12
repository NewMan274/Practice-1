import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import isSatSun from './exerciese/15-exercise.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import '../data/car.js';

renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();