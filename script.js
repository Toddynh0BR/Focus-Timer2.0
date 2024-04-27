import * as el from './src/elements.js'
import * as Au from './src/audios.js'
import * as Theme from './src/Theme.js'
import * as St from './src/states.js'


console.log(el.Minutes.textContent)
/*
///PlayBtn////
function countdown(){
    clearTimeout()
    if(St.default.isRunning == false){
        return
    }
    

    let minutes = Number(el.Minutes.textContent)
    let seconds = Number(el.Seconds.textContent)

    if(seconds == 0){
        seconds = 59
        minutes--
    }
      
    if(minutes < 0){
    document.documentElement.classList.remove('running');
    St.default.isRunning = !St.default.isRunning;
    minutes = minutes + 25
    seconds = seconds + 0
    updateDisplay(minutes, seconds)
    Au.AlarmAudio.play();
    return
    }
    seconds--
    


    updateDisplay(minutes, seconds)
    setTimeout(() => countdown(), 1000)
    }
   
///IcrementBtn///    
    function Icrement(){
    let minutes = Number(el.Minutes.textContent)
    let seconds = Number(el.Seconds.textContent)
     minutes = minutes + 5

     updateDisplay(minutes, seconds)
    }
///DecrementBtn///
    function Decrement(){
    let minutes = Number(el.Minutes.textContent)
    let seconds = Number(el.Seconds.textContent)
     minutes = minutes - 5

     updateDisplay(minutes, seconds)
    }
    





el.PlayBtn.addEventListener('click',() => { 
    Au.ButtonPress.play();
    document.documentElement.classList.add('running'); 
    St.default.isRunning = !St.default.isRunning  

    countdown()
})



el.StopBtn.addEventListener('click', () => {
    Au.ButtonPress.play()
    document.documentElement.classList.remove('running')
    St.default.isRunning = !St.default.isRunning
   

   
})




el.IcrementBtn.addEventListener('click', () => {
    Au.ButtonPress.play()
    Icrement()
})
el.DecrementBtn.addEventListener('click', () => {
    Au.ButtonPress.play()
    Decrement()
})


///Toggle//

el.Toggle.addEventListener('click', ()=> {
 document.documentElement.classList.toggle('dark')
})

function updateDisplay(minutes, seconds) {
    minutes = minutes ?? states.minutes
    seconds = seconds ?? states.seconds

    el.Minutes.textContent = String(minutes).padStart(2, "0")
    el.Seconds.textContent = String(seconds).padStart(2, "0")

}*/