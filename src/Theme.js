import * as el from './elements.js'
import * as Au from './audios.js'
import * as St from './themeSt.js'

////Florest-Config////

el.FlorestBtn.addEventListener('click', () => {
St.default.FlorestMute = !St.default.FlorestMute
/////////////////////////////////
el.CityBtn.classList.remove('On')
el.CloudyBtn.classList.remove('On')
el.FireBtn.classList.remove('On')
/////////////////////////////////

if (St.default.FlorestMute){
 Au.FlorestAudio.pause()
 el.FlorestBtn.classList.remove('On')
}else{
 Au.FlorestAudio.play()
 el.FlorestBtn.classList.add('On')
}


/////////////////////////////////
Au.FireAudio.pause()
Au.CityAudio.pause()
Au.CloudyAudio.pause()
})
Au.FlorestAudio.addEventListener('ended', () => {
    if (!St.default.FlorestMute) {
      Au.FlorestAudio.play();
    }
});

////Cloudy-Config////

el.CloudyBtn.addEventListener('click', () => { 
St.default.CloudyMute = !St.default.CloudyMute
/////////////////////////////////
el.FireBtn.classList.remove('On')
el.CityBtn.classList.remove('On')
el.FlorestBtn.classList.remove('On')
/////////////////////////////////

if (St.default.CloudyMute){
    Au.CloudyAudio.pause()
    el.CloudyBtn.classList.remove('On')
   }else{
    Au.CloudyAudio.play()
    el.CloudyBtn.classList.add('On')
   }

/////////////////////////////////
Au.FireAudio.pause()
Au.CityAudio.pause()
Au.FlorestAudio.pause()
})
Au.CloudyAudio.addEventListener('ended', () => {
    if (!St.default.CloudyMute) {
      Au.CloudyAudio.play();
    }
});

////City-Config////
el.CityBtn.addEventListener('click', () => { 

St.default.CityMute = !St.default.CityMute

/////////////////////////////////
el.FlorestBtn.classList.remove('On')
el.FireBtn.classList.remove('On')
el.CloudyBtn.classList.remove('On')
/////////////////////////////////

if (St.default.CityMute){
    Au.CityAudio.pause()
    el.CityBtn.classList.remove('On')
   }else{
    Au.CityAudio.play()
    el.CityBtn.classList.add('On')
   }

//////////////////////////////////
Au.FireAudio.pause()
Au.CloudyAudio.pause()
Au.FlorestAudio.pause()
})
Au.CityAudio.addEventListener('ended', () => {
    if (!St.default.CityMute) {
      Au.CityAudio.play();
    }
});

////Fire-config////
el.FireBtn.addEventListener('click', () => { 

St.default.FireMute = !St.default.FireMute

/////////////////////////////////
el.CloudyBtn.classList.remove('On')
el.FlorestBtn.classList.remove('On')
el.CityBtn.classList.remove('On')
/////////////////////////////////


if (St.default.FireMute){
    Au.FireAudio.pause()
    el.FireBtn.classList.remove('On')
   }else{
    Au.FireAudio.play()
    el.FireBtn.classList.add('On')
   }

//////////////////////////////////
Au.CityAudio.pause()
Au.CloudyAudio.pause()
Au.FlorestAudio.pause()
})
Au.FireAudio.addEventListener('ended', () => {
    if (!St.default.FireMute) {
      Au.FireAudio.play();
    }
});