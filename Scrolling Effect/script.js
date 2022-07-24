const boxes = document.querySelectorAll('.box')
// as in this project we are not clicking or doing something just scrolling
// that's why we use window and scroll event for this.
window.addEventListener('scroll',checkBoxes)
 checkBoxes()
function checkBoxes() {
    // specified the height till when card should be shown
    // without scroll
    const triggeredbottom =window.innerHeight/5*4
    boxes.forEach(box=>{
        const boxTop =box.getBoundingClientRect().top
    //    at starting top value is max and 
    // with scrolling it's value is been decreased so ,
    // we compared it will triggeredbottom
        if(boxTop<triggeredbottom){
        box.classList.add('show')
       }else{
        box.classList.remove('show')
       }
    })    
}