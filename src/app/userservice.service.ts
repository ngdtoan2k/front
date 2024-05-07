// import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { User } from './user';
import { Injectable } from '@angular/core';

// const httpOptions ={
//   headers:new HttpHeaders({'Content-Type':'Application/json'})
// }
// const apiUrl = 'http://localhost:4200/users';

@Injectable({
  providedIn: 'root'
})
export class userservice {
  url = 'http://localhost:4200/users';

  async getAll(): Promise<User[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  // constructor(private httpClient:HttpClient) { }

  // getAll():Observable<User[]>{
    
  //   return this.httpClient.get<User[]>(apiUrl).pipe(
  //   )
  // }
}

