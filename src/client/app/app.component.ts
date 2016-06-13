import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import {PresidentListComponent } from './president-list.component';

@Component({
  selector: 'presidents', 
  templateUrl: 'app/app.component.html',
  directives: [PresidentListComponent],
  providers[HTTP_PROVIDERS]
})

export class AppComponent {}