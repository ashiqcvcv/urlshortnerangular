import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor(private http:HttpClient) {
    
  }
  createUrl(data):Observable<any>{
    return this.http.post('https://shorturliq.herokuapp.com/create',data)
  }
  listUrl():Observable<any>{
    return this.http.get('https://shorturliq.herokuapp.com/list')
  }
  // filter(data){
  //   console.log(data,"is the data send");
  //   this.searchTerm = data;
  // }
  // search(){
  //   return this.searchTerm;
  // }

  changeTerm(message: string) {
    this.messageSource.next(message)
  }

}