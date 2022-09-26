import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voice-api',
  templateUrl: './voice-api.component.html',
  styleUrls: ['./voice-api.component.css']
})
export class VoiceApiComponent implements OnInit {
  @Input() public cart: any;
  audioSrc:string = "";
  
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.prepareTextToSpeak();
  }
  
  prepareTextToSpeak(){
    let textToSpeak: string = 'You Order Details are:  ';
    for (const item of this.cart) {
      textToSpeak += "\n Item " + item.Name + " -  Quantity - " + item.Quantity + ".";
    }
    this.fetchVoiceData(textToSpeak);
  }

  //Passing src and getting data from api
  fetchVoiceData(textToSpeak: string){
    const options = {
      responseType: 'text' as const,
      params: {
        key: '968f137b102647cdac60b33e1a7e9ed2',
        hl: 'en-us',
        r: '-2',
        v: 'John',
        c: 'mp3',
        f: '8khz_8bit_mono',
        b64: true,
        src: textToSpeak,
      },
      headers: {
        'X-RapidAPI-Key': 'e80e653504msh94a2e73a4d99373p1e2248jsn336c7f05cd37',
        'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
      },
    };
    this.httpclient.get('https://voicerss-text-to-speech.p.rapidapi.com/', options).subscribe((response:string)=> {
      this.audioSrc = response;
    })    
  }

}
