const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()
// idx is used bcz we want to check which small cup is clicked. There are 8 small cups.
// so if someone hit any of the small cup , then highlightCups function will execute.
smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=> highlightCups(idx))
})

function highlightCups(idx){
    // this if condition specify that , if we click our small cup which is full and the next cups
    // after this full cup is empty then empty this current cup too.
    if(smallCups[idx].classList.contains('full') && !smallCups
    [idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    // this foreach condition specify that , if we click the last cup which is previously empty and only full cup is present at 2nd position
    // then full the cup till that last cup which we clicked.
    smallCups.forEach((cup,idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }
        // if we click the 1st cup which is full and total 6 cups are also full , then the cup will be empty
        // if we click the previous cup or the 1st cup.
        else{
            cup.classList.remove('full')
        }
    })
    // after all functionality in small cups now we need to update our big cup.
    updateBigCup()
}
function updateBigCup(){
    // using this we want to excess all the small full number of cups
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // this will have all the small number of cups 
    const totalCups = smallCups.length
    // if there is no full cups , means all small cups are empty then , the % of water should be hidden
    // and height is 0 means , it should be at bottom (not seen).
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    // if there is some fullcups or we can say some water in big cup , then show the % visibility means , 10% , 20% like this.
    // and height should be taken as a formula , no of cups full / total no of cups * size of big cup , means till this fill the bigcup with water.
    // and also change the inner text in form of % according to the big cup filled.
    else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    // this means our bigcup is completely full , then the don't show remained  and it's height be 0.
    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    // if it is not full , then show  liters remained by using this formula.
    // 1 smallcup is 250ml and if 4 cups were filled then using this formula , only 1 litre remained.
    else{
        remained.style.visibility = 'visible'
         liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
}