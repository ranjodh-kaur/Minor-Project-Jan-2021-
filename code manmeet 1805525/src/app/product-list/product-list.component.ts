import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';



export class Product {
  prductName: string | undefined;
  price: number;
  rating: number | undefined;
  image: string | undefined;
  quantity?: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [
    { prductName: "Chocolate Cake", price: 500, rating: 4, image: "assets/images/Chocolate cake (1).jpg" },
    { prductName: "Croissant", price: 250, rating: 4, image: "assets/images/Croissant.jpg" },
    { prductName: "Crispy breadsticks", price: 200, rating: 3, image: "assets/images/Crispy breadsticks.jpg" },
    { prductName: "Cupcake Box", price: 400, rating: 5, image: "assets/images/Cupcake box.jpg" },
    { prductName: "Blueberry Cheesecake", price: 300, rating: 5, image: "assets/images/Blueberry Cheesecake.jpg" },
    { prductName: "Burger Buns", price: 200, rating: 4, image: "assets/images/Burger buns.jpg"},
    {prductName: "Garlic Bread Loaf", price: 200, rating: 5, image: "assets/images/Garlic bread loaf.jpg"},
    {prductName: "Chocolate Chip Cookies", price: 150, rating: 3, image: "assets/images/Chocolate chip cookies.jpg"},
    {prductName: "Mixed Cookies", price: 350, rating: 4, image: "assets/images/Mixed cookies.jpg"},
    {prductName: "Oatmeal Raisin Cookies", price: 500, rating: 5, image: "assets/images/Oatmeal raisin cookies.jpg"},
    {prductName: "Pineapple Cake", price: 350, rating: 5, image: "assets/images/Pineapple cake.jpg"},
    {prductName: "Rainbow Pastry", price: 250, rating: 4, image: "assets/images/Rainbow Pastry.jpg"},
    {prductName: "Red Velvet Cake", price: 500, rating: 5, image: "assets/images/Red velvet cake.jpg"},
    {prductName: "Whole Wheat Bread", price: 150, rating: 3, image: "assets/images/Whole wheat bread.jpg"},
    {prductName: "Baked Rusk", price: 200, rating: 4, image: "assets/images/Baked rusk.jpg"}
  ];

  cartList: Product[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(
    private modalService: NgbModal,
    private toast: ToastrService
  ) { }





  ngOnInit(): void {
  }

  addToBasket(item: Product) {
    let productExistInCart=this.cartList.find(prd => prd.prductName === item.prductName)
    if(!productExistInCart){
      item.quantity = 1;
      this.cartList.push({ ...item })
    } else {
      productExistInCart.quantity =  (productExistInCart.quantity || 1) + 1;
    }
    this.totalItems = this.cartList.reduce((a, b) => a + (b['quantity'] || 0), 0);
    this.toast.success(`${item.prductName} added to basket`, 'Success', {
      // positionClass: 'toast-bottom-center',
    })
  }
  
  removeProduct(item: Product){
    this.cartList.splice(this.cartList.findIndex(x => x.prductName == item.prductName), 1)
    this.totalItems = this.cartList.reduce((a, b) => a + (b['quantity'] || 0), 0);
    this.totalPrice = this.cartList.reduce((a, b) => a + (b['quantity'] * b['price']), 0)
    this.toast.warning(`${item.prductName} removed from basket`, 'Warning', {
      // positionClass: 'toast-bottom-center',
    })
  }
  
  openShoppingBasketModal(content: any) {
    this.totalPrice = this.cartList.reduce((a, b) => a + (b['quantity'] * b['price']), 0)
    this.modalService.open(content, { size: 'lg' }).result;
  }

}


