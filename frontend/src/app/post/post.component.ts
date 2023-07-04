import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title: string = "List of Posts";
  messagePost: string = "Message Post";
  sendToPostList: string = "This message from post";
  childMessage: string = "Child Message";

  @Input() fromParent: string = '';
}
