import { Component, OnInit } from '@angular/core';
import { textSpanIntersectsWithPosition } from 'typescript';
import { LoginService } from './login.service';
@Component({
  selector: 'app-data-change',
  templateUrl: './data-change.component.html',
  styleUrls: ['./data-change.component.scss']
})
export class DataChangeComponent implements OnInit {

  constructor(
    private loginService: LoginService,
  ) { }

  public data: string;
  public serviceData: string;
  public postData: string;
  ngOnInit(): void {
    this.getData();
  }
  getData(): any{
      this.loginService.login().subscribe(
        (res) => {
          // console.log(res);
          this.data = '初始接口测试通过';
          window.sessionStorage.clear();
          window.localStorage.clear();
          window.sessionStorage.setItem('jwt_token', res.data.jwt_token);
        }
      );
  }
  /**
   * get请求测试
   */
  getGetData(): any{
     // window.localStorage.getItem('jwt_token');
     this.loginService.getRequest().subscribe(
       res => {
        this.serviceData = JSON.stringify(res.data);
       }
     );
  }

  /**
   * post请求测试
   */
   getPostData(): any{
    // window.localStorage.getItem('jwt_token');
    this.loginService.postRequest().subscribe(
      res => {
        console.log('post请求获取的数据：', res);
        this.postData = res.pb_id;
       //  this.serviceData = JSON.stringify(res.data);
      }
    );
 }
}
