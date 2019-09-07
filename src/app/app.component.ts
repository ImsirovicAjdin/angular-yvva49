import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  frontends = [
    {
      name: 'Angular',
      details: {
        type: 'framework',
        versions: {
          current: 8,
          previous: 7
        } 
      }
    },
    {
      name: 'React',
      details: {
        type: 'library',
        versions: {
          current: 16.9,
          previous: 16.8
        } 
      }
    }
  ];
}
