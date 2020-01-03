import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  soundObjs = [
    {
      sound: "rain_inside",
      name: "Rain on the Roof",
      src: "assets/sounds/rain_inside.wav",
      ionicon: "umbrella"
    },
    {
      sound: "rain_light",
      name: "Light Rain",
      src: "assets/sounds/rain_light.mp3",
      ionicon: "rainy"
    },
    {
      sound: "train_passing",
      name: "Passing Train",
      src: "assets/sounds/train_passing.wav",
      ionicon: "train"
    }
  ]

  constructor() {}

  getSoundObj(sound){
    let soundObj:any = {};
    for(let obj of this.soundObjs) {
      if(obj.sound == sound){
        soundObj = obj;
        break;
      }
    }
    soundObj.volume = 1;
    return soundObj;
  }
}
