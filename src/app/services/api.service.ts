import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService{

    constructor(private httpClient: HttpClient) { }

    getProduct() : Observable<any> {
        return this.httpClient.get("http://localhost:3000/populerProduct")
    }

    getToko() : Observable<any> {
        return this.httpClient.get("http://localhost:3001/populerSaller")
    }

    getListProduct() : Observable<any> {
        return this.httpClient.get("http://localhost:3003/dataProduct")
    }
}