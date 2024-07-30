import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../services/product.service';
import Product from '../../../types/product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  formBuilder = inject(FormBuilder);
  productForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })

  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  editProductId!: string;
  ngOnInit() {
    this.editProductId = this.route.snapshot.params["id"];
    if (this.editProductId) {
      this.productService.getProduct(this.editProductId).subscribe(result => {
        this.productForm.patchValue(result);
      })
    }
  }
  addproduct() {
    if (this.productForm.invalid) {
      alert("Please Provide All Values");
      return;
    }
    const model: Product = this.productForm.value;
    this.productService.addproduct(model).subscribe(result => {
      alert("Product Addedd Successfully");
      this.router.navigateByUrl('/');
    })
  }

  updateProduct() {
    if (this.productForm.invalid) {
      alert("Please Provide All Values");
      return;
    }
    const model: Product = this.productForm.value;
    this.productService.updateProduct(this.editProductId, model).subscribe(result => {
      alert("Product Updated Successfully");
      this.router.navigateByUrl('/');
    })
  }
}
