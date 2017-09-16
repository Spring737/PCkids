import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  headimg= '../../assets/imgs/headportrait.jpg';
  p1= ['首页', '个人资料', '绑定手机号', '状态', '我的日记', '我的收藏'];
  con_one= 0;
  res= [ '备孕期', '怀孕期', '育儿期']
  constructor() { }

  ngOnInit() {
  }

}
