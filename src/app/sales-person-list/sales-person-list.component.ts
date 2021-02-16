import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Smith", "jhon@email.com", 10000),
    new SalesPerson("Kham", "Dang", "danqkhaw72@jp.com", 90000),
    new SalesPerson("Sakura", "Minia", "sakura@jp.com", 50000),
    new SalesPerson("Minami", "Nanami", "minami@jp.com", 70000),
    new SalesPerson("Helena", "Mia", "helena@usa.com", 80000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
