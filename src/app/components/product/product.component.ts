import { Component } from '@angular/core'
import { DataProduct } from '../../classes/data_product';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'product',
    templateUrl: './product.component.html'
})

export class ProductComponent { 
    constructor(private apiService: ApiService, private httpClient: HttpClient, private router: Router) {}
    
    dataProduct : DataProduct[] = []
    visibility : string = 'hidden'
    detailProduct:any =  {}
    idProduct : number = 0

    formEdit = new FormGroup({
        nameProduct: new FormControl(),
        price: new FormControl(),
        stock: new FormControl()
    })

    ngOnInit() {
        this.apiService.getListProduct()
        .subscribe(
            data => {
                this.dataProduct = data
            }
        )
    }

    onDeleteProduct(id: number) {
        this.httpClient.delete("http://localhost:3003/dataProduct/"+id, {
            observe: 'response'
        })
        .subscribe(
            response => {
                if (response.status === 200) {
                    this.router.navigate(["/message-success"])
                }
            }
        )
    }

    openModal(id: number) {
        this.visibility = 'flex'
        this.idProduct = id
        this.httpClient.get("http://localhost:3003/dataProduct/"+id) 
        .subscribe(
            data => {
                this.detailProduct = data
            }
        )
    }

    closeModal() {
        this.visibility = 'hidden'
    }

    editData(id: number) {
        this.httpClient.put("http://localhost:3003/dataProduct/"+id, {
            nameProduct : this.formEdit.value.nameProduct,
            price : this.formEdit.value.price,
            stock : this.formEdit.value.stock
        }, {
            observe : 'response'
        })
        .subscribe(
            response => {
                if (response.status === 200) {
                    this.router.navigate(["/message-success"])
                }
            }
        )
    }

}