import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    this.inHome = true;
    this.inList = false;
    this.searchForm = new FormGroup({
      'term' : new FormControl()
    })
    router.events.subscribe((val) => {
        if (val instanceof ActivationEnd) {
            this.route =  val.snapshot.component['name'];
            if(this.route == 'HomeComponent'){
              this.inHome = true;
              this.inList = false;
            }else if(this.route == 'ListComponent'){
              this.inHome = false;
              this.inList = true;
            }
        }
    });
}
ngOnInit() {
}

  search(){
    this.databaseService.changeTerm(this.searchForm.value.term);
  }

}