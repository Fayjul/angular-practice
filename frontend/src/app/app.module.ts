import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navBar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DataBindingAssignmentComponent } from './data-binding-assignment/data-binding-assignment.component';
import { DataBindingA1Component } from './data-binding-a1/data-binding-a1.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    DataBindingComponent,
    DataBindingAssignmentComponent,
    DataBindingA1Component,
    AngularDirectiveComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
