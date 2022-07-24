const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
// mouseenter is an event of a class, when someone hover the mouse over particular thing
// this event get called and similarly mouseleave when someone remove mouse from that
// particular position.
left.addEventListener('mouseenter',()=>container.classList.add('hover-left'))
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left'))
right.addEventListener('mouseenter',()=>container.classList.add('hover-right'))
right.addEventListener('mouseleave',()=>container.classList.remove('hover-right'))