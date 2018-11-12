import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VnosService {

  private vnosUrl = '/api/parser/model?model=vnos';
  constructor(private http: HttpClient) { }

  getVnosData(): Observable<any> {
    return this.http.get(this.vnosUrl);
  }
}
