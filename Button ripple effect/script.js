const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button =>{
    button.addEventListener('click',function (e){
       
    //    this is done, as we are fixing our button in the middle of the page , so we don't need to show position from top
    // in the dom .
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

this.appendChild(circle)

// This is done bcz when we add something in DOM using vanilla js , then it's our responsibility to remove it also.
setTimeout(() => circle.remove(),500);

    })
})