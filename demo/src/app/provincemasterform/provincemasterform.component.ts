import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-provincemasterform',
  templateUrl: './provincemasterform.component.html',
  styleUrls: ['./provincemasterform.component.css']
})
export class ProvincemasterformComponent implements OnInit {
  id:any
  showbutton:any
  Pname:any
  countryID:any
  Countryname:any
  province:any
  master:any
  countryname:any
  pname:any
  description:any

  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryID=""
    this.activatedroute.params.subscribe(params=>{
      this.id=params['id']
      this.GetProvince()
    })
    this.Getcountry();
  }
  GetProvince(){
    debugger
    this.AddresssService.GetProvince().subscribe(data=>{
      let temp =data.filter(x => x.id==this.id)
      this.Pname=temp[0].pname;
      this.countryID=temp[0].countryId;
      this.Countryname=temp[0].countryname;
    })
  }

  public Submit(){
     var entity={
      "CountryId" : this.countryID,
      "Pname": this.Pname,
     }
    this.AddresssService.InsertProvince(entity).subscribe(data=>{
      alert ('Submited')
    })
  }

  public edit(){

    var entity = {
      "ID" : this.id,
      "CountryId" : this.countryID,
      "Pname": this.Pname,
    }
    this.AddresssService.UpdateProvince(entity).subscribe(data=>{
      alert ('Updated Sucessfully')
      location.href="#/Provincemaster"
    })
  }

  public Getcountry(){
    this.AddresssService.GetCountryMaster().subscribe(data=>{
      this.master=data
    })
  }
}
