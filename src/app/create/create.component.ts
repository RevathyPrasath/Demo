import { Component, OnInit } from '@angular/core';
import{userDetailsModel} from '../../shared/model/userDetails.model';
import{CommomService}from '../commom.service'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private common:CommomService) { }
  localUser:userDetailsModel= new userDetailsModel();
  
  ngOnInit() {
  }
save()
{
  this.common.regDetails=Object.assign(this.localUser);
  alert("Registration Successfull");
  console.log(this.common.regDetails);
  // this.localUser= new userDetailsModel();
  
  
}
clear()
{
  this.localUser= new userDetailsModel();
  
}
}
