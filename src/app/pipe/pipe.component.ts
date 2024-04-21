import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  public stringdata: string ='hey this is the string data'
  public numdata= new Date
  public numdata1= 777
  public jsondata= {
    "name":"this is the vinayak"

  }
  public age=18
}
