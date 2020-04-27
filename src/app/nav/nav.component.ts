import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchForm;
  route;
  inHome;
  inList;
  constructor(private router: Router,private databaseService:DatabaseService) {
  
    this.searchForm = new FormGroup({
      'term' : new FormControl()
    })
}
ngOnInit() {
}

  search(){
    this.databaseService.changeTerm(this.searchForm.value.term);
  }

}