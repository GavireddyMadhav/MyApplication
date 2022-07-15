import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-countrymaster',
  templateUrl: './countrymaster.component.html',
  styleUrls: ['./countrymaster.component.css']
})
export class CountrymasterComponent implements OnInit {
  master:any
  Countryname :any
  Descriptio:any
  data:any 
  search:any

  constructor(public AddresssService:AddresssService) { }

  ngOnInit(): void {
    
    this.GetCountryMaster()
  }


  GetCountryMaster(){
    this.AddresssService.GetCountryMaster().subscribe(data=>{
      this.master=data;
    })
  }

  delete(id:any){
    this.AddresssService.DeleteCountryMaster(id).subscribe(data=>{
      debugger
      alert('Deleted')
      this.GetCountryMaster()
    })
  }

  edit(id:any){
    location.href="#/Countrymasterform/" + id
  }

}
