import { Component } from '@angular/core';

import { SoundService } from '../services/sound.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sounds = [];

  constructor(
    public soundService: SoundService,
    public dataService: DataService
  ) {
    this.init();
  }

  init() {
    this.sounds = this.dataService.soundObjs;
    console.log("SOUNDS: ", this.sounds)
  }


  playSound(sound) {
    this.soundService.add(sound);
  }

  stopSound(sound) {
    this.soundService.remove(sound);
  }

  checkSoundsPlaying() {
    this.soundService.check();
  }

}
