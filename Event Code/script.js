const insert = document.getElementById('insert')
// we use window bcz we are not working from our document instead we are using our keyboard.
// keydown means if key is pressed.
//   In line 9 , if the event key is space button then instead of printing empty space print space 
// if it is other key then print the key . We use ternary operator for comapring the space key.
window.addEventListener('keydown',(event)=>{
   insert.innerHTML = `
   <div class="key">
            ${event.key ===' ' ?'Space':event.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.keycode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
   `
})