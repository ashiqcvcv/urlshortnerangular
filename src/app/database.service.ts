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
    return this.http.post('https://urliq.herokuapp.com/create',data)
  }
  listUrl():Observable<any>{
    return this.http.get('https://urliq.herokuapp.com/list')
  }

  changeTerm(message: string) {
    this.messageSource.next(message)
  }

}