import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'foo-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgSwitch, 
    NgSwitchCase, 
    NgSwitchDefault
  ]
})
export class AppComponent {
  title = 'angular-15-standalone-components-example';
}
