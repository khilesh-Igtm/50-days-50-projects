const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

// dragover, dragenter , dragleave , drop are some events associated with drag & drop property.
for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

// this function will hold the image for a time until will drop it to some position. And will make the previous position
// to invisible.
function dragStart(){
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible',0)

}

// this function will fill the image in the box.
function dragEnd(){
    this.className = 'fill'

}
// this function will have the property of drag over the boxes , like when we drag image over some box , it starts showing
// the image in the box but not clear (with low opacity) , which we did through CSS.
function dragOver(e){
e.preventDefault();
}

// this function will work when we try to put or drag the image in the box , it's box get hovered.
function dragEnter(e){
e.preventDefault();
this.className += ' hovered'
}
// this function is for leaving the box after we drag the image.
function dragLeave(){
this.className = 'empty'
}

// this function is for drop functionality.
function dragDrop(){
this.className = 'empty'
this.append(fill)
}