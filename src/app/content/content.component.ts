import { Component } from "@angular/core";
import { Produk } from "../classes/produk";
import { Toko } from "../classes/toko,";
import { ApiService } from "../services/api.service";

@Component({
    selector: "content",
    templateUrl: "./content.component.html"
})

export class ContentComponent{
com: any;

    constructor(private apiService: ApiService) {}

    dataProduct : Produk[] = []
    dataToko : Toko[] = []

    ngOnInit() {
        this.apiService.getProduct()
        .subscribe(
            productData => {
                this.dataProduct = productData
            }
        )

        this.apiService.getToko()
        .subscribe(
            tokoData => {
                this.dataToko = tokoData
            }
        )
    }
    
}