import { Component, OnInit } from 'angular2/core';
import { President } from './President';
import { PresidentService } from './president.service';
import { PresidentDetailComponent } from './president-detail.component';

@Component({
  selector: 'president-list',
  templateUrl: 'app/president-list.component.html',
  providers: [PresidentService],
  directives: [PresidentDetailComponent]
})

export class PresidentListComponent implements OnInit {
  constructor(private _presidentService: PresidentService) {}
  
  presidents: President[];
  selectedPresident: President;
  errorMessage: string;
  
  ngOnInit(){
    this.getPresidents();
  }
  
  getPresidents() {
    this._presidentService.getPresidents()
      .subscribe(
        presidents => this.presidents = presidents,
        error => this.errorMessage = <any>error
      );
  }
  
  select(president: President){
    console.log(president.name);
    this.selectedPresident = president;
  }
}