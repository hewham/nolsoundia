import { Component } from '@angular/core';
import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public soundService: SoundService
  ) {
    this.init();
  }

  init() {
    
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
