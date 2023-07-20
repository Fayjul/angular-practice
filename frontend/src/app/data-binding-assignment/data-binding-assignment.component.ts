import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-assignment',
  templateUrl: './data-binding-assignment.component.html',
  styleUrls: ['./data-binding-assignment.component.css']
})
export class DataBindingAssignmentComponent {
  postTitle = '';
  postDescription = '';
  imageUrl = '';
  webUrl = '';
  isImageShow : boolean = false;
  isButtonShow : boolean = false;
  isBackgroundShow : boolean = false;

  alterBackground()
  {
    this.isBackgroundShow = !this.isBackgroundShow;
  }
  imageShow()
  {
    this.isImageShow = true;
  }
  buttonOfWeb()
  {
    this.isButtonShow = true;
  }

}
