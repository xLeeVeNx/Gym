'use strict';

import { maskPhone } from './modules/maksPhone.js';
import { footerForm } from './modules/footerForm.js';
import { popupClose } from './modules/popupClose.js';

maskPhone('#phone, #callback_form-phone, #callback_footer_form-phone');
footerForm();
popupClose();