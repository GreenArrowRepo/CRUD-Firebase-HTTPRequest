import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/appServices/server.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})


export class ManageProductsComponent implements OnInit {
  constructor(private serverService : ServerService ) { }
  ngOnInit(): void {
    this.onFetchProduct()
  }

  fetching = false;
  editMode : boolean =false;
  editIndex:number =0;
  @ViewChild('idd')id!: ElementRef;
  @ViewChild('names') name:ElementRef | any;
  @ViewChild('pricce') price:ElementRef | any;

  dataTitle = this.serverService.getDataTitle();
  products : any = [
   /*  {
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
    }, */
  ]

  onAddProduct(idd: { value: string; }, namea : any, prices : any)
  {

    if(this.editMode)
    {
        this.products[this.editIndex] = {
          id : idd.value,
          name:namea.value,
          price: prices.value,  
        }
        this.editMode = false;
        this.id.nativeElement.value = '';
    this.name.nativeElement.value = '';
    this.price.nativeElement.value = '';
    this.onSaveProduct();
    }
    
    else
    {
      this.products.push({
        id : idd.value,
        name:namea.value,
        price: prices.value,
        
      })
      console.log("inside onAddProducts")
    }

    
  }
  onSaveProduct(){
    this.serverService.saveProducts(this.products)
      .subscribe(
        (response: any) => console.log(response),
        (err: any) => console.log(err) 
      ) 
      console.log("inside onSaveProducts")
  }


  onFetchProduct(){
    this.fetching =  true
    this.serverService.fetchProducts().subscribe(
    (response : any) => {
      const data = JSON.stringify(response)
      this.products = JSON.parse(data)
      this.fetching = false;
    
    },
    (err : any)=> console.log(err)
  )
  }

  onEditProduct(i : any)
  {
    this.editMode = true;
    this.editIndex = i;
    this.id.nativeElement.value = this.products[i].id;
    this.name.nativeElement.value = this.products[i].name;
    this.price.nativeElement.value = this.products[i].price;
  }

  onDeleteProduct(i : any)
  {
    console.log("i " + i)
  }
}
