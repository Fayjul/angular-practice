import { Component, ViewChild , AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'frontend';
  parentMessage: string = "Message Changed";
  message : string = '';
  fromChildOutput : string = '';

  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp);
    
  }
  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
    console.log("hello " + this.message);
    
  }

  reciveMessage($event : any){
    console.log("from reciveMessage " + $event);
    this.fromChildOutput = $event;
  }
}
