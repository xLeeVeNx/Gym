const maskPhone = (selector, masked = '+7 (___) ___-__-__') => {
  const elems = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;

    const template = masked;
    const def = template.replace(/\D/g, '');

    const val = this.value.replace(/\D/g, '');

    let i = 0;

    let newValue = template.replace(/[_\d]/g, e => i < val.length ? val.charAt(i++) || def.charAt(i) : e);
    i = newValue.indexOf('_');

    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }

    let reg = template.substr(0, this.value.length)
      .replace(/_+/g, e => '\\d{1,' + e.length + '}')
      .replace(/[+()]/g, '\\$&');

    reg = new RegExp('^' + reg + '$');

    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }

    if (event.type === 'blur' && this.value.length < 5) {
      this.value = '';
    }
  }

  for (const elem of elems) {
    elem.addEventListener('input', mask);
    elem.addEventListener('focus', mask);
    elem.addEventListener('blur', mask);
  }
};

export { maskPhone };