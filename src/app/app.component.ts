import { Component, OnInit } from '@angular/core';
import { URL_Short } from './Models/urlShort.model';
import { data } from './paste-url/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url_result?: URL_Short;

  constructor() { }

  ngOnInit(): void {
  }

  searchWeather(url: data) {
    const url_string = url.data;
    this.searchURLData(url_string);
  }

  searchURLData(url?: string): void {
    if (url == undefined) {
      alert("Enter URL");
    }
    else {
      const encodedParams = new URLSearchParams();
      encodedParams.append("url", url);
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '32fdb44070msh8731f5405224080p174618jsn9fb941bdf7fa',
          'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        body: encodedParams
      };

      fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
        .then(response => response.json())
        .then(response => {
          this.getShortUrl(response);
        })
        .catch(err => console.error(err));
      
    }    
  }
  
  getShortUrl (url: URL_Short) {
    this.url_result = url;
  }

  title = 'URL Shorten';
}
