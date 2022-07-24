// program for creating buttons , we can do this using html also
// but this time we tried it of by making using js
// there are 7 sounds name given according to our audio id name from html file.

const sounds = ['crash','kick-bass','snare','tom-1','tom-2','tom-3','tom-4']

// then we iterate along each sound and created an element which is button through line 9
sounds.forEach(sound =>{
    const btn= document.createElement('button')
     // then we added  button with btn class , so that we can add css functionality
    // or incase we wanna make some changes in buttons , so instead of changing particularly
    //  we can use DOM manipulation.
    btn.classList.add('btn') 
 // then we given the buttons their name using sound variable which is being initialised at
 // starting .  
    btn.innerText = sound
    // then we add event when someone clicks on the button.
    // when someone clicks, it starts playing sound and remember it will play only music
    // or some kind of audio not video or unvalid audio.
    btn.addEventListener('click',()=>{
        stopmusic()
        document.getElementById(sound).play()
    })
    // from here we connected our html button with our js buttons.
    document.getElementById('buttons').appendChild(btn)
})
// as the name suggest ,this function will stop the music if other song is played.
function stopmusic() {
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)
        song.pause()
        // this currentTime=0 will reset the current audio to 0 and start playing the new audio
        song.currentTime =0;
    })
    
}





   