import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{
  orders: any[] = [];
  orderForm: FormGroup;
  orderIdForm: FormGroup;

  constructor(private fb: FormBuilder, private orderService: OrderService) {
    this.orderForm = this.fb.group({
      userId: '',
      productIds: '',
      totalAmount: 0
    });
    this.orderIdForm = this.fb.group({
      orderId: ''
    });
  }

  ngOnInit(): void {
    // Optionally, you can load orders here
  }

  createOrder(): void {
    const order = this.orderForm.value;
    order.productIds = order.productIds.split(',').map((id: string) => id.trim());

    this.orderService.createOrder(order).subscribe(response => {
      console.log('Order created:', response);
      this.orders.push(response);
    });
  }

  getOrderById(): void {
    const orderId = this.orderIdForm.value.orderId;
    this.orderService.getOrderById(orderId).subscribe(response => {
      console.log('Order retrieved:', response);
      this.orderForm.setValue({
        userId: response.userId,
        productIds: response.productIds.join(', '),
        totalAmount: response.totalAmount
      });
    });
  }

  updateOrder(): void {
    const orderId = this.orderIdForm.value.orderId;
    const order = this.orderForm.value;
    order.productIds = order.productIds.split(',').map((id: string) => id.trim());

    this.orderService.updateOrder(orderId, order).subscribe(response => {
      console.log('Order updated:', response);
      const index = this.orders.findIndex(o => o.orderId === orderId);
      if (index !== -1) {
        this.orders[index] = response;
      }
    });
  }

  deleteOrder(): void {
    const orderId = this.orderIdForm.value.orderId;
    this.orderService.deleteOrder(orderId).subscribe(response => {
      console.log('Order deleted:', response);
      this.orders = this.orders.filter(o => o.orderId !== orderId);
    });
  }
}
