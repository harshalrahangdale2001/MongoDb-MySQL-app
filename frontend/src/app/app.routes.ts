import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
export const routes: Routes = [
    
    {
        path:'',
        component:ProductsComponent,
    },
    {
        path:'products',
        component:ProductsComponent,
    },
    {
        path:'products/add',
        component:ProductFormComponent,
    },
    {
        path:'products/:id',
        component:ProductFormComponent,
    },
];
