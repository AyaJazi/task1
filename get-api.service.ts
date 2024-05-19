import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Item {
  ItemNo: number;
  ItemName: string;
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  apiUrl='http://kavar.truetime.ps/api/itemss';
   constructor(private http: HttpClient) { }
   getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
 }

}
