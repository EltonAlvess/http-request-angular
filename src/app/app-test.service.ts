import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Customer, ResponseBody } from './customer.model'

@Injectable({
  providedIn: 'root'
})
export class AppTestService {
  constructor(private http: HttpClient) { }



  onPost(customerModel: Customer){
    const url = 'https://reqbin.com/echo/post/json';

    const bodyRequest = new HttpParams()
      .append("Id", "12345")
      .append("Customer", "John Smith")
      .append("Quantity", 1)
      .append("Price", 10.00)

      return this.http.post<ResponseBody>(url, bodyRequest, {observe: 'response'});
  }
}
