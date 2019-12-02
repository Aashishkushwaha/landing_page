let notification = document.querySelector('.notification');
    let notification__box = document.querySelector('.notification__box');
    let notification_button = document.querySelector('#notification_button');
    let newsletter = document.querySelector('#newsletter');
    let newsletter__close = document.querySelector('#newsletter__close')

    notification_button.addEventListener('click', (event) => {
      event.preventDefault();
      notification.classList.toggle('u-hide');
    });

    // notification.addEventListener('transitionend', (event) => {
    //   if (event.propertyName === 'min-height')
    //   {
    //     console.log(event.target);
    //     notification.classList.add('u-disappear');
    //   }
    // });

    newsletter__close.addEventListener('click', event => {
      event.preventDefault();
      newsletter.classList.add('u-hide');
    });


    let body = document.querySelector('body');
    window.onscroll = (event) => {
      console.log(document.documentElement.scrollTop);
      if(document.documentElement.scrollTop >= 500){
        newsletter.classList.remove('u-hidden');
        newsletter.classList.add('newsletter');
      }
    }