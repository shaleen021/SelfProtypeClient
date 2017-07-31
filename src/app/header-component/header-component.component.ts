import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProgressBarConfiguration } from '../app.constants';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit,OnDestroy{

  private _progressBar = ProgressBarConfiguration;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

}
