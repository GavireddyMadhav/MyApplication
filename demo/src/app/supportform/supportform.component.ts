import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supportform',
  templateUrl: './supportform.component.html',
  styleUrls: ['./supportform.component.css']
})
export class SupportformComponent implements OnInit {
  event:any 

  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  save(){

  }

   
  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    
  }
  
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
