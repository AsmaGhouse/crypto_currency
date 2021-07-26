import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  price:string;
  hour :string;
  days:string;
  symbol: string;
  img:string

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bitcoin',price:'34,330.40', symbol: 'BTC',hour:'2.65',days:'9.49',img:'../../assets/bit_coin.png'},
  {position: 2, name: 'Ethereum',price:'2,159.17',  symbol: 'ETH',hour:'1.96',days:'11.16',img:'../../assets/img2.png'},
  {position: 3, name: 'Tether',price:'1.00', symbol: 'USDT',hour:'0.01',days:'0.06',img:'../../assets/img3.png'},
  {position: 4, name: 'Binance Coin',price:'34,330.40',  symbol: 'BNB',hour:'-0.10',days:'-0.28',img:'../../assets/img4.png'},
  {position: 5, name: 'Cardano', price:'34,330.40', symbol: 'ADA',hour:'1.33',days:'3.43',img:'../../assets/img5.png'},
  {position: 6, name: 'XRP',price:'34,330.40', symbol: 'XRP',hour:'-0.23',days:'3.83',img:'../../assets/img6.png'},
  {position: 7, name: 'USD Coin',price:'34,330.40', symbol: 'USDC',hour:'2.37',days:'0.1',img:'../../assets/img7.png'},
  {position: 8, name: 'Dogecoin',price:'34,330.40',  symbol: 'DOGE',hour:'2.11',days:'0.4',img:'../../assets/img8.png'},
  
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name','price',  'symbol','hour','days'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
