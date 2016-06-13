import { Injectable } from 'angular2/core';
import {President} from './President'

@Injectable()
export class PresidentService {
  
  getPresidents() { 
    presidents = [];
    
    for(let i =0; i< 44; i++){
      let p = new President();
      p.name = 'The President';
      p.number = i+1;
      presidents.push(p);
    }
    return presidents;
  }
}