import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogeElements } from './dialog-element';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyCalci:FormGroup |any;
  countries =['India','Pakistan','China','US']
  currency = ['4173113.647  INR','5510389  PKR','252108.83  Renminbi','38864.30 Dollar']
  data:any;
  cardData = false;
  constructor(private formBuilder:FormBuilder,
    public dialog: MatDialog
    ) { }
    // openDialog() {
    //   this.dialog.open(DialogeElements);
    // }
  createForm(){
    this.currencyCalci = this.formBuilder.group({
      coins:['',Validators.required],
      country:['',Validators.required]
    })
    
  }
  submit(){
    
      if(this.currencyCalci.value['country'] == 'India'){
        this.data = this.currency[1] 
      }
      else if(this.currencyCalci.value['country'] == 'Pakistan'){
        this.data = this.currency[2] 
      }
      else if(this.currencyCalci.value['country'] == 'China'){
        this.data = this.currency[3] 
      }
      else if(this.currencyCalci.value['country'] == 'US'){
        this.data = this.currency[4] 
      }
      this.cardData = true;
      console.log(this.data)
      const dialogRef = this.dialog.open(DialogeElements,{
      
        data:{
           progress:this.data
        }
      });
      dialogRef.afterClosed().subscribe(result =>{
        if(result){

        }
        
      })
  }
 
  ngOnInit(): void {
    this.createForm();
  }

}
