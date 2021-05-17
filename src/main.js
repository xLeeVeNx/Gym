'use strict';

import { maskPhone } from './modules/maksPhone.js';
import { footerForm } from './modules/footerForm.js';
import { popup } from "./modules/popup.js";

maskPhone('#phone, #callback_form-phone, #callback_footer_form-phone, #callback_form2-phone, #callback_form1-phone');
footerForm();
popup();