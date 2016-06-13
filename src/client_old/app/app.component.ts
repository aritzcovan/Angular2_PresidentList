import {Component} from 'angular2/core';
import {PresidentListComponent } from './president-list.component';

@Component({
  selector: 'presidents', 
  templateUrl: 'app/app.component.html',
  directives: [PresidentListComponent]
})

export class AppComponent {}