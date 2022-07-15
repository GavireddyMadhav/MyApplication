import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-provincemaster',
  templateUrl: './provincemaster.component.html',
  styleUrls: ['./provincemaster.component.css']
})
export class ProvincemasterComponent implements OnInit {
  Pname: any
  CountryId: any
  Countryname: any
  province: any
  search: any
  master: any
  id: any
  countryid: any
  dummProvince: any;

  constructor(public AddresssService: AddresssService) { }

  ngOnInit(): void {
    this.GetProvince()
    this.GetCountry()
  }

  GetProvince() {
    this.AddresssService.GetProvince().subscribe(data => {
      this.province = data;
      this.dummProvince = data;
    })
  }

  delete(id: any) {
    this.AddresssService.DeleteProvince(id).subscribe(data => {
      alert('Deleted')
      this.GetProvince()
    })
  }
  edit(id: any) {
    location.href = "#/Provincemasterform/" + id
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
      this.GetProvince()
    }

    debugger
  }
}
