const popup = () => {
  document.body.addEventListener('click', event => {
    const target   = event.target;
    const outPopup = target.closest('.form-content');

    document.querySelectorAll('.close-btn, .close_icon').forEach(item => {
      if ( (target === item) || (!outPopup) ) item.closest('.popup').classList.remove('active');
    });

    if (target.closest('.club-select')) document.querySelector('header .head .club-select .clubs-list ul').classList.toggle('active');
    else if (target.closest('.open-popup') || target.closest('.callback-btn')) {
      event.preventDefault();
      document.querySelector(`${target.dataset.popup}`).classList.add('active');
    } 
  });
};

export { popup };