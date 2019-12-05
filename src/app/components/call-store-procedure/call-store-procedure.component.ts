import { Component, OnInit } from '@angular/core';
import { CallStoreProcedureService } from 'src/app/services/call-store-procedure.service';
import { Employee } from 'src/app/core/model';


@Component({
  selector: 'app-call-store-procedure',
  templateUrl: './call-store-procedure.component.html',
  styleUrls: ['./call-store-procedure.component.css']
})
export class CallStoreProcedureComponent implements OnInit {

  dados: Employee[];
  dataSource = this.dados;
  
  constructor(private store: CallStoreProcedureService) { }

  ngOnInit() {
  
  }
  callStore(codigo: number){
    this.store.callStoreProcedure(codigo).then(response => {
      this.dados = response;
    });
  }
  

}
