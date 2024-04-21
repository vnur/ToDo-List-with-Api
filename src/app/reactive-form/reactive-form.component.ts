import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveformService } from '../services/reactiveform.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public vinuform: any
  public isFormSubmit: boolean = false

  tabledata: any = []
  selecteddata: any

  constructor(private fb: FormBuilder, private servicedata: ReactiveformService) {
    this.vinuform = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],

    })

  }

  get f() {
    return this.vinuform.controls
  }


  submit() {
    this.isFormSubmit = true
    if (this.vinuform.valid) {

      this.servicedata.postdata(this.vinuform.value).subscribe((result) => {
        console.warn(result);
        this.tabledata.push(result)
      })
    }
  }

  delete(data: any) {
    this.servicedata.delete(data.id).subscribe((result) => {

      this.tabledata.forEach((a: any, index: any) => {
        console.warn(a, index);

        if (a.id == data.id) {
          this.tabledata.splice(index, 1)
        }
        else {
          console.warn('data not matched');
        }
      })

    })
  }


  selectdata(data: any) {
    this.selecteddata = data
    this.vinuform.patchValue({
      title: data.title,
      price: data.price,
      description: data.description,
      image: data.image,
    })
  }

  updatedata() {

    const index = this.tabledata.findIndex((item: any) => item.id === this.selecteddata.id);
    if (index !== -1) {
      // Update the item in the array directly
      this.tabledata[index].title = this.vinuform.value.title;
      this.tabledata[index].price = this.vinuform.value.price;
      this.tabledata[index].description = this.vinuform.value.description;
      this.tabledata[index].image = this.vinuform.value.image;
    }

    this.vinuform.reset()
  }



}




