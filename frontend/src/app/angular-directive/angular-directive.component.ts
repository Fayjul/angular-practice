import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directive',
  templateUrl: './angular-directive.component.html',
  styleUrls: ['./angular-directive.component.css']
})
export class AngularDirectiveComponent {
  postArray:Array<string> = ['Post 1', 'Post 2', 'Post 3'];

  constructor(){
    for(let i = 0; i<this.postArray.length; i++)
    {
      console.log(this.postArray[i]);
    }
  }
}
