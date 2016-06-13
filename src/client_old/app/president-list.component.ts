import { Component, OnInit } from 'angular2/core';
import { President } from './President'
import { PresidentService } from './president.service'

@Component({
  selector: 'president-list',
  templateUrl: 'app/president.list.html',
  providers: [PresidentService]
})

export class PresidentListComponent implements OnInit {
  constructor(private _presidentService: PresidentService) {}
  
  presidents: President[];
  
  ngOnInit(){
    this.presidents = this._presidentService.getPresidents();
  }
  
}