import { Component, OnInit } from '@angular/core';
import{userDetailsModel} from '../../shared/model/userDetails.model'
import{CommomService}from '.././commom.service';
import { Routes, RouterModule,ActivatedRoute  } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private userEdit:CommomService) { }
  localUser:userDetailsModel;
  ngOnInit() {
    this.localUser=this.userEdit.regDetails;

  }
  save(){
    this.userEdit.regDetails=Object.assign(this.localUser);
    alert("Updated Successfully");
    console.log(this.userEdit.regDetails);
  }
  cancel(){
    this.localUser=new userDetailsModel() ;
    // this.route.navigate('/home');
  }
}
