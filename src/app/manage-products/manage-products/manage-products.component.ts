import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/appServices/server.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  constructor(private serverService : ServerService ) { }
  ngOnInit(): void {
   
  }
  //dataTitle = this.serverService.getDataTitle();
  products = [
    {
      id: 'p1',
      name:'Laptop',
      price: 45000
    },
    {
      id: 'p2',
      name:'Mobile',
      price: 8500
    },
    {
      id: 'p3',
      name:'Laptop',
      price: 45000
    },
    {
      id: 'p4',
      name:'Mobile',
      price: 8500
    },
  ]

  onAddProduct(id: { value: any; }, name: { value: any; }, price: { value: any; }){
    this.products.push({
      id: id.value,
      name:name.value,
      price: price.value,
      
    })
    console.log(this.products)
  }
  onSaveProduct(){
   /*  this.serverService.addProducts(this.products)
      .subscribe(
        (response: any) => console.log(response),
        (err: any) => console.log(err) 
      ) */
  }

  onFetchProduct(){

  }

 
 
}
