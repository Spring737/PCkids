import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ster= ['账号登陆', '验证码登陆'];
  tab_index= 0;
  jinggaoimg= '../../assets/imgs/error.png';
  _telephone= '13137025875';
  _password= '123456';

  constructor() { }

  ngOnInit() {
  }

}
