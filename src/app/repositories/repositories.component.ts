import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {

  repositories : any = [];
  repository : IRepository = {name: "", description: ""};
  newRepository : IRepository = {name: "", description: ""};

  constructor(private repoService: RepositoriesService) { }

  ngOnInit() {
    this.repoService.getRepos().subscribe((data) => {
      this.repositories = data.json();
      this.repository = this.repositories[0];
    })
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
