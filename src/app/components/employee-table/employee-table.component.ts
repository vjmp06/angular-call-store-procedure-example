import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/core/model';


const ELEMENT_DATA: Employee[] = [{employeeID:1, firstName:'Murphy', lastName:'19,Quaker Ridge Rd,06801', address:'Diane'}];

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  @Input() dataSource: Employee[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = this.employees;
  
  constructor() {
    
   }

  ngOnInit() {
  }
  
}
