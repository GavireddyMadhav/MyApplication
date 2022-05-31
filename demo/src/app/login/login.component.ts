import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }
  address: any;
  addresstype: any;
  addressline1: any
  addressline2: any
  addressline3: any
  addressline4: any
  country: any
  province: any
  barangy: any
  postcode: any
  contactnumber: any
  contactRelationship: any
  mobilenumber: any
  officeNumber: any
  landlineNumber: any
  emailId: any
  id: any;
  showButton: any
  countryid: any
  cname: any
  pname:any
  countryList: any;
  provinceList:any;
  AddressList:any;
  name:any
  DistrictList:any;
  dname:any;



  ngOnInit(): void {

    this.activatedroute.params.subscribe(params => {
      this.id = params['id']

      if (this.id != undefined) {
        this.GetAddress();
        this.showButton = 1;
      }
      else {
        this.showButton = 0
      }

    })

    this.GetCountry()
    this. GetProvince()
    this.GetAddressType()
    this.GetDistrict()

  }


  GetCountry() {
    this.AddresssService.GetCountry().subscribe(data => {
      this.countryList = data
    })
  }

  GetProvince(){
    this.AddresssService.GetProvince().subscribe(data=>{
      this.provinceList=data
    })
  }


  GetAddressType(){
    this.AddresssService.GetAddressType().subscribe(data=>{
      this.AddressList=data
    })
  }


  GetDistrict(){
    this.AddresssService.GetDistrict().subscribe(data=>{
      this.DistrictList=data
    })
  }



  // GetAddress(){
  //   debugger
  //   // this.AddresssService.GetAddress().subscribe(data=>{
  //   //   debugger
  //   //   let temp=data;
  //   //   this.addresstype= temp[0].addresstype,
  //   // })
  // }

  GetAddress() {
    debugger
    this.AddresssService.GetAddress().subscribe(data => {
      debugger
      this.address = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      this.addresstype = temp[0].addresstype,
        this.addressline1 = temp[0].addressline1,
        this.addressline2 = temp[0].addressline2,
        this.addressline3 = temp[0].addressline3,
        this.addressline4 = temp[0].addressline4,
        this.country = temp[0].country,
        this.province = temp[0].province,
        this.barangy = temp[0].barangy,
        this.postcode = temp[0].postcode,
        this.contactnumber = temp[0].contactnumber,
        this.contactRelationship = temp[0].contactRelationship,
        this.mobilenumber = temp[0].mobilenumber,
        this.officeNumber = temp[0].officeNumber,
        this.landlineNumber = temp[0].landlineNumber,
        this.emailId = temp[0].emailId
    })
  }

  public submit() {
    debugger
    var entity = {
      "addresstype": this.addresstype,
      "addressline1": this.addressline1,
      "addressline2": this.addressline2,
      "addressline3": this.addressline3,
      "addressline4": this.addressline4,
      "country": this.country,
      "province": this.province,
      "barangy": this.barangy,
      "postcode": this.postcode,
      "contactnumber": this.contactnumber,
      "contactRelationship": this.contactRelationship,
      "mobilenumber": this.mobilenumber,
      "officeNumber": this.officeNumber,
      "landlineNumber": this.landlineNumber,
      "emailId": this.emailId
    }
    this.AddresssService.InsertAddress(entity).subscribe(data => {
      Swal.fire('Submited Sucessfully')
      location.href = "/Update"
    })
  }




  public edit() {
    var entity = {
      "addresstype": this.addresstype,
      "addressline1": this.addressline1,
      "addressline2": this.addressline2,
      "addressline3": this.addressline3,
      "addressline4": this.addressline4,
      "country": this.country,
      "province": this.province,
      "barangy": this.barangy,
      "postcode": this.postcode,
      "contactnumber": this.contactnumber,
      "contactRelationship": this.contactRelationship,
      "mobilenumber": this.mobilenumber,
      "officeNumber": this.officeNumber,
      "landlineNumber": this.landlineNumber,
      "emailId": this.emailId
    }
    this.AddresssService.InsertAddress(entity).subscribe(data => {
      alert('edit sucessfully');
      location.href = "/Update"
    })
  }
  countryID: any

  public filterCountry(even: any) {
    debugger
    this.countryID = even.target.value;
  }
  
  provinceID:any

  public filterProvince(even: any) {
    debugger
    this.provinceID = even.target.value;
  }

  addressID:any
  public filterAddresstyp(even:any){
    this.addressID= even.target.value;
  }



  public filterDistrict(even:any){
    this.addressID= even.target.value;
  }
}
