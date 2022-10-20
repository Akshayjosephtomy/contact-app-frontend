import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallcontacts',
  templateUrl: './viewallcontacts.component.html',
  styleUrls: ['./viewallcontacts.component.css']
})
export class ViewallcontactsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.contactData=data
      }
    )
  }


  contactData:any=[]

  ngOnInit(): void {
  }

}
