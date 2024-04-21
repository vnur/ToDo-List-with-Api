import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CustomPipe } from './pipe/custom.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ListComponent,
    ReactiveFormComponent,
    CustomPipe,
    PipeComponent,
    LifecycleComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
