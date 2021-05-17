const popupClose = () => {
  document.body.addEventListener('click', event => {
    const target   = event.target;
    const outPopup = target.closest('.form-content');

    document.querySelectorAll('.close-btn, .close_icon').forEach(item => {
      if ( (target === item) || (!outPopup) ) item.closest('.popup').classList.remove('active');
    });
  });
};

export { popupClose };