import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voice-api',
  templateUrl: './voice-api.component.html',
  styleUrls: ['./voice-api.component.css']
})
export class VoiceApiComponent implements OnInit {
  @Input() public item: any;
  public newsrc = 'You Order Details are:  ';
  public voicesrc = "";

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.voiceData();
  }

  voiceData(){
    //Creating custom order voice data 
    let temp: string ='';
    for (const iterator of this.item) {
      temp += "\n Item " + iterator.item + " -  Quantity - " + iterator.quantity + ".";
    }
    this.newsrc += temp;
    this.fetchVoiceData();

    //reseting the value for api to refetch data 
    this.newsrc= "You Order Details are:  ";
    
    //Prevent MultiClick on Listen my order button
    document.getElementById("voiceDataBtn")?.setAttribute("disabled", ""); 
  }

  //Passing src and getting data from api
  fetchVoiceData(){
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
        src: this.newsrc,
      },
      headers: {
        'X-RapidAPI-Key': 'e80e653504msh94a2e73a4d99373p1e2248jsn336c7f05cd37',
        'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
      },
    };
    this.httpclient.get('https://voicerss-text-to-speech.p.rapidapi.com/', options).subscribe((response)=> {
      this.voicesrc = response;
      const getDiv = document.getElementById("addAudio");
      const createAudio = document.createElement("audio");
      createAudio.setAttribute("autoplay", "");
      createAudio.setAttribute("controls", "");
      createAudio.setAttribute("src", this.voicesrc);
      getDiv?.append(createAudio);
    })    
  }

}
