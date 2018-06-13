import { Component, OnInit } from '@angular/core';
import{CommomService} from '../commom.service';
import{userDetailsModel}from '../../shared/Model/userDetails.model';


@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css']
})
export class PresentComponent implements OnInit {

  constructor(private userView:CommomService) { }
  localModel:userDetailsModel;
  
  ngOnInit() {
    this.localModel=this.userView.regDetails;
    console.log(this.userView.regDetails);
  }

}
