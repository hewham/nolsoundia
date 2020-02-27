import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  soundObjs = [
    {
      sound: "rain_inside",
      name: "Rain on the Roof",
      src: "assets/sounds/rain_inside.mp3",
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
      src: "assets/sounds/train_passing.mp3",
      ionicon: "train"
    },
    {
      sound: "birds_and_bees",
      name: "Birds And Bees",
      src: "assets/sounds/birds_and_bees.mp3",
      ionicon: "egg"
    },
    {
      sound: "highway",
      name: "Highway",
      src: "assets/sounds/highway.mp3",
      ionicon: "car"
    },
    {
      sound: "suburb",
      name: "Suburb",
      src: "assets/sounds/suburb.mp3",
      ionicon: "home"
    },
    {
      sound: "train_distant",
      name: "Distant Train",
      src: "assets/sounds/train_distant.mp3",
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
    soundObj.volume = 0.75;
    return soundObj;
  }
}
