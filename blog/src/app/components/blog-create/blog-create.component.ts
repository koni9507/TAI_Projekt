import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  item = {
    id: null,
    title: '',
    stan: '',
    brygada: '',
    liczebnosc: '',
    content: '',
  };

  constructor(private data: DataServiceService,
              private router: Router) {
  }

  ngOnInit() {

  };

  setData(item){
    this.data.addPost(item).subscribe(() => {
      this.router.navigate(['/blog']);
    });
  }
}
