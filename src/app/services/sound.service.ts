import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  soundsPlaying = [];

  constructor(
    public dataService: DataService
  ) {}

  add(sound) {
    if(!this.checkIfSoundIsPlaying(sound)) {
      let soundObj = this.dataService.getSoundObj(sound);
      let audio = this.buildAudioObj(soundObj);
      soundObj.audio = audio;
      this.soundsPlaying.push(soundObj);
    }
    return;
  }

  buildAudioObj(soundObj) {
    let audio = new Audio();
    audio.src = soundObj.src;
    audio.load();

    // audio.volume = soundObj.volume;
    audio.loop = true;
    audio.play();

    return audio;
  }

  checkIfSoundIsPlaying(sound) {
    for(let i in this.soundsPlaying) {
      let soundObj = this.soundsPlaying[i];
      if(soundObj.sound == sound){
        return true;
      }
    }
    return false;
  }

  remove(sound) {
    for(let i in this.soundsPlaying) {
      let soundObj = this.soundsPlaying[i];
      if(soundObj.sound == sound){
        this.soundsPlaying[i].audio.pause();
        this.soundsPlaying.splice(parseInt(i), 1);
        break;
      }
    }
    return;
  }

  check() {
    console.log("SOUNDS PLAYING:");
    console.log(this.soundsPlaying);
    return;
  }

}
