import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public apiHost = '';
  constructor(
    private http: HttpClient,
  ) { }

  login(): any {
    const userInfo = new FormData();
    userInfo.append('username', 'zhanglulu');
    userInfo.append('password', 'ata123');
    // window.sessionStorage.getItem('jwt_token');
    // const options = {
    //   // headers: new HttpHeaders({ Authorization: `JWT ${window.sessionStorage.getItem('jwt_token')}` })
    // };
    return this.http.post( `/api/dapi/login/`, userInfo);
  }

  getRequest(): any{
    // /dapi/main/
    const token = window.sessionStorage.getItem('jwt_token');
    const options = {
      headers: new HttpHeaders({
         Authorization: `JWT ${token}` ,
      })
    };
    return this.http.get( `/api/dapi/main/`, options);
  }

  postRequest(): any{
    const token = window.sessionStorage.getItem('jwt_token');
    const options = {
      headers: new HttpHeaders({
         Authorization: `JWT ${token}` ,
      })
    };
    const body = {
      entry_ids : ['6009288b250b856fd421dd33', '6009288b250b856fd421dd34']
    };
    return this.http.post( `/api/dapi/projects/5fabae6b250b856d86956a4a/entries/single_pkg/`, body, options);
  }
}
