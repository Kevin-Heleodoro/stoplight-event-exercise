(function() {
  'use strict';

  // YOUR CODE HERE
})();

const controls = document.querySelector('#controls');
let stopLight = document.querySelector('#stopLight');
let slowLight = document.querySelector('#slowLight');
let goLight = document.querySelector('#goLight');
let lightButtons = document.querySelectorAll('.button');
let lightBulbs = document.querySelectorAll('.bulb')

controls.addEventListener('click', function(elem) {
  if(elem.target.id === 'stopButton') {
    stopLight.classList.toggle('stop');
    (stopLight.classList.length === 1) ? console.log(`${elem.target.textContent} light is off`) : console.log(`${elem.target.textContent} light is on`);
  }
  if(elem.target.id === 'slowButton') {
    slowLight.classList.toggle('slow');
    (slowLight.classList.length === 1) ? console.log(`${elem.target.textContent} light is off`) : console.log(`${elem.target.textContent} light is on`);
  }
  if(elem.target.id === 'goButton') {
    goLight.classList.toggle('go');
    (goLight.classList.length === 1) ? console.log(`${elem.target.textContent} light is off`) : console.log(`${elem.target.textContent} light is on`);
  }
})

lightButtons.forEach((e)=>{
  e.addEventListener('mouseenter', ()=>{
    console.log(`Entered ${e.textContent} button`);
  })
  e.addEventListener('mouseleave', ()=>{
    console.log(`Left ${e.textContent} button`);
  })
})

// lightBulbs.forEach((e)=>{
//   e.addEventListener()
// })

// controls.addEventListener('click', function() {

//   if(elem.target.className === 'bulb') {
//     console.log(`${elem} is off`)
//   } else {
//     console.log(`${elem} is on`)
//   }
// })