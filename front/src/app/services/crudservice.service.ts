import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../model/users';
import { register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  [x: string]: any;

  url: string = "http://localhost:4500/nearluk";
  url4:string="http://localhost:4500/profile";

  constructor(private htc: HttpClient) { }

  CheckLogin1(username:string): Observable<any> {

    return this.htc.get(this.url + '/' + username,{ responseType: 'json' });
  }

  AddMembers(reg: register): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url +'/signup', JSON.stringify(reg), httpOptions)
}
 
SignupProfile(signObj: register): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  return this.htc.put(this.url4 + '/' + signObj.username, JSON.stringify(signObj), httpOptions);
}

Profile(a:string){
  return this.htc.get(this.url4 + '/' + a, { responseType: 'json' })
}

CheckLogin(u: string, p : string) : Observable<any>{
        
  return this.htc.get(this.url +'/Users/'+ u+'/'+p,this.httpOptions);
}

timerUpdate(name,timer,description):Observable<any>{
  const timerobj = {
    timer,description
  }
const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};
return this.htc.put(this.url4 + '/' + name, JSON.stringify(timerobj), httpOptions);
}
}
