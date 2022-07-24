const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

// This is like a json data from which we will extract the data.
const days = ["Sunday" , "Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","June","July",
"Aug","Sep","Oct","Nov","Dec"];

// This event will be fired when we hit the button , if the button is white , then it will
// change to dark with innerhtml Dark mode and vice -versa.
toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        // e.target means , the element on which we click on that is toggle.
        e.target.innerHTML = 'Dark Mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})


// This function is for showing and updating the clock with the date and day.
function setTime(){ 
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >=12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`

    // if minute is <10 , then add 0 at starting and then the remaining minutes.
timeEl.innerHTML = `${hoursForClock}:${minutes<10 ?'0${minutes}':minutes} ${ampm}`
dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}

// A map function that will helps us to make change in clock rotation .
    const scale = (number, inMin, inMax, outMin, outMax) => {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

setTime() 

setInterval(setTime,1000)