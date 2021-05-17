const footerForm = () => {
  const clubs = document.querySelectorAll('#footer_form input[name="club-name"]');
  const form  = document.querySelector('#footer_form');

  let allow = false;
  
  const check = event => {
    const target = event.target;

    if (target === clubs[0] || target === clubs[1]) {
      allow = true;

      document.querySelector('.choose-club').classList.remove('error');
      form.removeEventListener('change', check);
    }
  };

  form.addEventListener('change', check);

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!allow) {
      document.querySelector('.choose-club').classList.add('error');
    } else {      
      const sendForm = body => {
        return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      };
      
      const formData = new FormData(form);
      let body = {};
      formData.forEach( (value, key) => body[key] = value);
      
      sendForm(body)
        .then(response => {
          if (response.status !== 200) throw new Error('Network status is not 200');

          document.querySelector('#thanks').classList.add('active');
        })
        .catch(error => {
          console.error(error);

          document.querySelector('#error').classList.add('active');
        });
    }
  });
};

export { footerForm };