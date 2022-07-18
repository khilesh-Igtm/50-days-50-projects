const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        // if someone click the image , then first remove the active functionality from the already
        // active image and then add active functionality on the clicked image.
        removeActiveClass();
        panel.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}
