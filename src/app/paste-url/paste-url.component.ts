import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {data} from './data';

@Component({
  selector: 'app-paste-url',
  templateUrl: './paste-url.component.html',
  styleUrls: ['./paste-url.component.css']
})
export class PasteURLComponent implements OnInit {
  name = new FormControl('');

  @Output() searchURL: EventEmitter<data> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onclickSearch(): void {
    const url = {
      data: this.name.value!
    };
    this.searchURL.emit(url);
  }
}
