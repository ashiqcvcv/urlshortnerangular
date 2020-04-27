import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlInfo;
  shortUrl = {
    'url' : ''
  };
  constructor(private databaseService:DatabaseService) { 
    this.urlInfo = new FormGroup({
      'name' : new FormControl('',Validators.required),
      'longUrl' : new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
  }
  createUrl(){
    console.log(this.urlInfo.value);
    if(this.urlInfo.valid){
       this.databaseService.createUrl(this.urlInfo.value).subscribe((data)=>{
      console.log("value");
      this.shortUrl = data;
    })
  }}

}
