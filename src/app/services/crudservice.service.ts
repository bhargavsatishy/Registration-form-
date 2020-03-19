import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../model/users';
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private htc: HttpClient) { }

  submit(users: Users): Observable<any> {  // Login Check
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post('http://localhost:3000/Users', JSON.stringify(users), httpOptions);
  }

  submitForm(users: Users, id): Observable<any> {  // Login Check
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.put('http://localhost:3000/Users/' + id, JSON.stringify(users), httpOptions);
  }

  getByid(id): Observable<any> {  // Login Check
    return this.htc.get('http://localhost:3000/Users/' + id, { responseType: 'json' });
  }



  get(): Observable<any> {
    {
      return this.htc.get('http://localhost:3000/Users/', { responseType: 'json' });
    }
  }


}
