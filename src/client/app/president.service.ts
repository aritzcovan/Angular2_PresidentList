import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PresidentService {
  constructor(private _http: Http) {}

  getPresidents(){
    return this._http.get('api/presidents.json')    
      .map((response: Response) => <President[]>response.json().data)
      //.do(data => console.log(data))
      .catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
  
  
  //this method just returns a list of fake president names created in a loop
  // getPresidents() { 
  //   presidents = [];
    
  //   for(let i =0; i< 44; i++){
  //     let p = new President();
  //     p.name = 'The President';
  //     p.number = i+1;
  //     presidents.push(p);
  //   }
  //   return presidents;
  // }
}