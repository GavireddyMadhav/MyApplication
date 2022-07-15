import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  support:any
  date:any
  time:any
  issue:any
  priority:any
  attachmrnt:any
  commants:any
  status:any

  constructor(public AddresssService: AddresssService) { }

  ngOnInit(): void {
    this.GetSupport()
  }
  GetSupport(){
    this.AddresssService.GetSupport().subscribe(data=>{
      this.support=data;
    })
  }
}
