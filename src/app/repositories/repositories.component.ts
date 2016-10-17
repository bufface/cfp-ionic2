import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {

  repositories : any = [];
  repository : IRepository;
  newRepository : IRepository = {name: "", description: ""};

  constructor() { }

  ngOnInit() {
    this.repository = {name: "Angular code for CF", description: "Proyecto demo de CF y Angular"};

    setTimeout(() => {
      this.repositories = [
        {name: "Angular code for CF", description: "Proyecto demo de CF y Angular"},
        {name: "Bootstrap", description: "Frontend Framework"},
        {name: "PHP Ecommerce", description: "Código del curso Ecommerce"},
        {name: "Ruby code", description: "Código con ejemplos del curso de Ruby"}
      ];

      this.newRepository.name = "Hola desde la funcionalidad";
    }, 3000);
  }

  setMainRepository(repository) {
    this.repository = repository;
  }

  addNewRepo() {
    this.repositories.unshift(this.newRepository);
    this.newRepository = {name: "", description: ""};
  }
}

interface IRepository {
  name: string,
  description: string
}
