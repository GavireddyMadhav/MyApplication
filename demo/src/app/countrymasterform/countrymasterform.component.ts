import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrymasterform',
  templateUrl: './countrymasterform.component.html',
  styleUrls: ['./countrymasterform.component.css']
})
export class CountrymasterformComponent implements OnInit {
  master:any
  Countryname :any
  Descriptio:any
  id:any
  showbutton:any

  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      this.id=params['id']
      if(this.id != undefined){
        this.GetCountryMaster()
        this.showbutton=1
      }
      else{
        this.showbutton=0
      }
    })
  }

  GetCountryMaster(){
    this.AddresssService.GetCountryMaster().subscribe(data=>{
      this.master =data.filter(x=> x.id==this.id)
      let temp = data.filter(x=> x.id==this.id)
      this.Countryname=temp[0].countryname,
      this.Descriptio=temp[0].descriptio
    })
  }

  public submit(){
    var entity={
      "Countryname" : this.Countryname,
      "Descriptio" : this.Descriptio
    }
    this.AddresssService.InsertCountryMaster(entity).subscribe(data=>{
      alert ('Submited')
      location.href="#/Countrymaster"
    })
  }

  public edit(){
    debugger
    var entity={
      "ID":this.id,
      "Countryname" : this.Countryname,
      "Descriptio" : this.Descriptio
    }
    this.AddresssService.UpdateCountryMaster(entity).subscribe(data=>{
      alert ('Updated Sucessfully')
      location.href="#/Countrymaster"
    })
  }


}
