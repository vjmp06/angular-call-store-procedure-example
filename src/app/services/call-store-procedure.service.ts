import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CallStoreProcedureService {

  url = "http://localhost:8088/";
  constructor(private http: HttpClient) { }

  callStoreProcedure(codigo: number) : Promise<any> {
    return this.http.get(`${this.url}/${codigo}`).toPromise();
  }
}
