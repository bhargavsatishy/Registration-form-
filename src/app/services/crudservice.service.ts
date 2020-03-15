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
    // alert(id1+id2+id3)
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post('http://localhost:3000/Users', JSON.stringify(users), httpOptions);
  }
  getByid(): Observable<any> {  // Login Check
    return this.htc.get('http://localhost:3000/Users', { responseType: 'json' });
  }

  delete(id: any): Observable<any> {  // Login Check
    return this.htc.delete('http://localhost:3000/Users/' + id, { responseType: 'json' });
  }

  get1(id: any): Observable<any> {
    {
      return this.htc.get('http://localhost:3000/Users/' + id, { responseType: 'json' });
    }
  }

  edit(id: any, Users: Users): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.put('http://localhost:3000/Users/' + id, JSON.stringify(Users), httpOptions);
  }
}
