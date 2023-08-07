import { Component } from '@angular/core';
import{datas}from '../app/data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  coursedata=datas;

  startdate = new Date(2023,7,3 )
  price = 9.99;
  rate = 0.454;

  firstcourse = datas[0];


}
