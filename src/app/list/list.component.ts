import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  shortUrls;
  filterValue;
  constructor(private databaseService:DatabaseService) {
    this.databaseService.listUrl().subscribe((data)=>{
      console.log("listed");
      this.shortUrls = data;
    })
  }
  ngOnInit() {
    this.databaseService.currentMessage.subscribe(message => this.filterValue = message)
  }

}
