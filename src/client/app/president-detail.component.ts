import { Component, EventEmitter, Input, Output } from 'angular2/core';

import { President } from './President'

@Component({
  selector: 'president-detail',
  templateUrl: 'app/president-detail.html'
})

export class PresidentDetailComponent {
  @Input() president: President;
}