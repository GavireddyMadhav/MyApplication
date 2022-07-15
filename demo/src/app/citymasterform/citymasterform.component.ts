import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-citymasterform',
  templateUrl: './citymasterform.component.html',
  styleUrls: ['./citymasterform.component.css']
})
export class CitymasterformComponent implements OnInit {
  id: any
  city: any
  name: any
  description: any
  provinceId: any
  Pname: any
  Cname: any
  search: any
  master: any
  countryID: any
  provinceID: any
  province: any

  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.countryID=''
    this.provinceID=''
    this.activatedroute.params.subscribe(params => {
      this.id = params['id']
      this.GetCity()
    })
    this.Getcountry()
    this.GetProvince()
  }

  GetCity() {
    debugger
    this.AddresssService.GetCity().subscribe(data => {
      debugger
      let temp = data.filter(x => x.id == this.id)
      this.name = temp[0].name,
        this.description = temp[0].description,
        this.provinceId = temp[0].provinceId,
        this.Pname = temp[0].pname,
        this.Cname = temp[0].cname
      this.Getcountry()
      this.GetProvince()
    })
  }
  getProvinceID(even: any) {
    this.provinceID = even.target.value;
  }

  public Submit() {
    var entity = {
      "name": this.Cname,
      "description": this.description,
      "provinceId": this.provinceID
    }
    this.AddresssService.InsertCity(entity).subscribe(data => {
      alert('Submited')
      location.href = "#/Citymaster"
      // this.GetCity()
    })
    this.Getcountry()
    this.GetProvince()
  }

  public edit() {
    var entity = {
      "id": this.id,
      "name": this.name,
      "description": this.description,
      "provinceId": this.provinceID
    }
    this.AddresssService.UpdateCity(entity).subscribe(data => {
      alert('Updated ')
      location.href = "#/Citymaster"
    })
  }

  public Getcountry() {
    this.AddresssService.GetCountryMaster().subscribe(data => {
      this.master = data
    })
  }
  public GetProvince() {
    debugger
    this.AddresssService.GetProvince().subscribe(data => {
      this.province = data
    })
  }
}
