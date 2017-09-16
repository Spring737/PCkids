import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ster= ['账号注册', '验证码注册'];
  tab_index= 0;
  jinggaoimg= '../../assets/imgs/error.png';
  _telephone= '13137025875';
  _password= '123456';
  _passwordcon= '123456'
  res= [ '备孕期', '怀孕期', '育儿期']
  constructor() { }

  ngOnInit() {
  }

}
