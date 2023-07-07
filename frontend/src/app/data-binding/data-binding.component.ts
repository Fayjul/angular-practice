import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  bool: boolean = false;
  message = 'Message from data binding';
  imgUrl = 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';

  buttonClick(){
    this.bool = !this.bool;
  }
}
