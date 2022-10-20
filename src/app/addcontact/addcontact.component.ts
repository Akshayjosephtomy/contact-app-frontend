import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  status:boolean=false

  name=""
  email=""
  address=""
  phone=""
  readvalue=()=>{
    let data={
      "name":this.name,
      "author":this.email,
      "pdate":this.address,
      "price":this.phone
    }
    console.log(data)
    this.myapi.addcontact(data).subscribe(
      (response)=>{
        console.log(response)
        
      }
    )
    alert("contact added successfully")
    this.name=""
    this.email=""
    this.address=""
    this.phone=""
    this.status=true
  }

  ngOnInit(): void {
  }

}
