import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories : any = [];

  constructor() { }

  ngOnInit() {
    this.repositories = [
      {name: "Angular code for CF", description: "Proyecto demo de CF y Angular"},
      {name: "Bootstrap", description: "Frontend Framework"},
      {name: "PHP Ecommerce", description: "Código del curso Ecommerce"},
      {name: "Ruby code", description: "Código con ejemplos del curso de Ruby"}
    ];
  }

}
