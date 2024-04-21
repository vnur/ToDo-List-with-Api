import { Component } from '@angular/core';
import { PersonDetailsService } from '../services/person-details.service';
import { PersonI } from 'interface';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {


  constructor(private Pservice: PersonDetailsService) {

  }




  submit(data:any) {
    // console.warn(data);
    if (data.valid){
      console.warn(data);
      this.Pservice.postData(data.value).subscribe(()=>{{
        
      }})
      
    }
  }
}
