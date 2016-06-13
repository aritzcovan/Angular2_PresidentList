import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import 'rxjs/Rx';

bootstrap(AppComponent)
  .then(success => console.log('app bootstrap successful'))
  .catch(error => console.log(error));