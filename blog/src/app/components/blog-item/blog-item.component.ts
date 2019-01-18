import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input('brygada') brygada: string;
  @Input('text') text: string;
  @Input('id') id;

  constructor() { }

  ngOnInit() {
  }

}
