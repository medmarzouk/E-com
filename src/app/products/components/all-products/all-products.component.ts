import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { product } from '../../inter/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  products:product[] = [];
  categories:any[] = [];
  cartProduct:any[]=[];
  constructor(private service:ProductsService) { }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products = res
      //console.log(this.products)
    }, error =>{alert("error")})
  }
  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
     // console.log(res)
      this.categories = res
    }, error =>{alert("error")})
  }
  filterCategory(event:any){
    let value = event.target.value;
    //console.log(value)
    if(value == "all"){
      this.getProducts()
    } 
    else {
      this.getProductsByCategory(value)
     }
    }
  getProductsByCategory(keyword:string){
    this.service.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.products = res
    }, error =>{alert("error")})
  }
  addToCart(event:any){
   // console.log(event)
    //JSON.stringify() tab3dhe data kima n3tihelk 
    //JSON.parse() ki teji te9bel data kima hiya
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProduct.find(item =>item.item.id == event.item.id)
     if(exist){
      alert("produit mawjoud")
     }else{
       this.cartProduct.push(event)
       localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
     }
    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
    }
  }
}
