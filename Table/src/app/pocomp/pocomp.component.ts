import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocomp',
  templateUrl: './pocomp.component.html',
  styleUrls: ['./pocomp.component.css']
})
export class PocompComponent implements OnInit {

  ngOnInit():void{}
  headers= ["Last Name", "First Name", "DOB","Status","Dx Reveiw" ];
  rows = [
{
"Last Name" : "Bell",
"First Name" : "Elizabeth",
"DOB" : "3/5/1934",
"Status": "",
"Dx Reveiw": "0"
}
  ]
}
