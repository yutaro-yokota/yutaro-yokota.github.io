'use strict';

const menu = document.querySelector('.ham');
const mask1 = document.querySelector('.mask1');
const modalwindow = document.querySelector('.modal_window');
const close = document.querySelector('.close');
menu.addEventListener('click' , () => { 
  menu.classList.toggle('modal');
  mask1.classList.toggle('mask');
  modalwindow.classList.toggle('open');
});

close.addEventListener('click' , () => {
  modalwindow.classList.toggle('open');
  mask1.classList.toggle('mask');
  menu.classList.toggle('modal');
});

{
  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}
