import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-result-url',
  templateUrl: './result-url.component.html',
  styleUrls: ['./result-url.component.css']
})
export class ResultUrlComponent implements OnInit {

  @Input() data?:string;
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  onclickCopy(inputElement:any): void{
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
