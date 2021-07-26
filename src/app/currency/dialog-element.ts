import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
    selector:'app-dialog-element',
    template:`<h1 mat-dialog-title>Currency </h1>
    <div mat-dialog-content >1 bit coin equals {{passedData.progress}}  </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close >Close</button>
    </div>`
})
export class DialogeElements implements OnInit{
    
    constructor( @Inject(MAT_DIALOG_DATA) public passedData:any ){}
   
    ngOnInit(){
       
    }
}