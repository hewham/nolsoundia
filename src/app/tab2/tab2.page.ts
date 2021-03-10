import { Component } from '@angular/core';
import { SoundService } from '../services/sound.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sounds = [];

  constructor(
    public soundService: SoundService,
    public dataService: DataService
  ) {
    this.init();
  }

  init() {
    this.sounds = this.dataService.soundObjs;
  }

  playSound(sound) {
    this.soundService.add(sound);
  }

  checkSoundsPlaying() {
    this.soundService.check();
  }

  logSound(sound) {
    console.log(sound)
  }

  stopSound(sound) {
    this.soundService.remove(sound);
  }

  volumeChanged(sound) {
    this.soundService.volumeChanged(sound);
  }

}
