import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-a1',
  templateUrl: './data-binding-a1.component.html',
  styleUrls: ['./data-binding-a1.component.css']
})
export class DataBindingA1Component {
  postTitle: string = '';
  postDetails: string = '';
  imageUrl: string = '';
  postUrl: string = '';
  addBackground: boolean = false;
}
