import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-citymaster',
  templateUrl: './citymaster.component.html',
  styleUrls: ['./citymaster.component.css']
})
export class CitymasterComponent implements OnInit {
  city:any
  name:any
  description:any
  ProvinceId:any
  Pname:any
  Cname:any
  search:any
  master:any
  countryid: any
  dummProvince: any;
  province:any
  Provinceid:any


  constructor(public AddresssService:AddresssService) { }

  ngOnInit(): void {
   this.GetProvince()
    this.GetCity()
    this.GetCountry()
  }
   public GetCity(){
    this.AddresssService.GetCity().subscribe(data=>{
      this.city=data
    })
  }

  delete(id:any){
    this.AddresssService.DeleteCity(id).subscribe(data=>{
      alert ('Deleted')
      this.GetCity()
    })
  }

  edit(id:any){
    location.href='#/Citymasterform/'+id
  }


  GetProvince() {
    this.AddresssService.GetProvince().subscribe(data => {
      this.province = data;
      this.dummProvince = data;
    })
  }


  public GetCountry() {
    this.AddresssService.GetCountryMaster().subscribe(data => {
      this.master = data;

    })
  }

  
  getCountyID(even: any) {
    debugger
    this.countryid = even.target.value;

    if (this.countryid != 0) {
      this.province = this.dummProvince.filter((x: { countryId: any; }) => x.countryId == this.countryid)
    }
    else {
      this.GetCity()
    }

    debugger
  }


  getProvinceID(even:any){
    this.Provinceid = even.target.value;
    if(this.Provinceid ! = 0){
      this.city= this.dummProvince.filter((x :{provinceId: any}) => x.provinceId == this.Provinceid)
    }
    else{
      this.GetCity()
    }
  }

}
