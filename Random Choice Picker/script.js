const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
// this will focus in textarea.
textarea.focus();
// this keyup event is fired when , someone press the key for typing and then left
//  it up .
textarea.addEventListener('keyup',(e)=>{
    // whatever we type inside the textarea is e.target.value.
    createTags(e.target.value);
    if(e.key==='Enter'){
        setTimeout(()=>{
e.target.value = '';
        },10)
        randomSelect();
    }

})
// we want to split the string based on the comma and make it as a tag.
// and we also want to remove the white spaces we hit comma.
// this can be done using trim method and then we map the trimmed string in one array.

function createTags(input) {
    const tags = input.split(',').filter(tag=>tag.trim()
    !=='').map(tag=>tag.trim()) 
    tagsEl.innerHTML = ''
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl);
    });

}


function randomSelect(){
    const times =30;
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()
        highlighttag(randomTag)
        setTimeout(()=>{
unhighlighttag(randomTag)
        },100)
    },100);

    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlighttag(randomTag)
        },100)
    },times*100)
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)]

}
function highlighttag(tag){
    tag.classList.add('highlight');
}
function unhighlighttag(tag){
    tag.classList.remove('highlight');
}