const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0
// number iteration will take time for 30 millisecond
let int = setInterval(blurring,30)
function blurring() {
    load++
    if(load>99){
        // if we hit 100 it will stop incrementing
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    // this is for number range
    loadText.style.opacity = scale(load,0,100,1,0);
    // remember to use px at last otherwise it will not work.
    // this is for image
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}
// this is a syntax for mapping opacity to number range
// number is load means what is incrementing
// intMin is from index i.e, 0 in this case
//  intMan is to index i.e, 100
// outMin is opacity from i.e, 1 in this case
// outMax is opacity to i.e, 0 in this case maximum opacity
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}