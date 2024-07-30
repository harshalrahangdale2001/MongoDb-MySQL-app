import { Component, inject } from '@angular/core';
import Product from '../../types/product';
import { ProductService } from '../services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
    products:Product[]=[];
    productService=inject(ProductService);
    ngOnInit(){
      this.productService.getProducts().subscribe((result)=>{
        this.products=result;
        console.log(this.products);
      })
    }
    delete(id:string){
      const ok=confirm("Are You Sure You Want To Delete  This?");
      if(ok){
        this.productService.deleteProduct(id).subscribe((result)=>{
          alert("Product Deleted Successfully");
          this.products=this.products.filter((u)=>u._id!=id);
        })
      }
    }
}
