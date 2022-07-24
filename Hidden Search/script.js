const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click',()=>{
    // toggle is used to switch from one effect , feature to another.
    search.classList.toggle('active')
    // by using focus() method , there will be a focus on input box means a writing status
    // when you start typing the cursor is beeping like that.
    input.focus()
})
