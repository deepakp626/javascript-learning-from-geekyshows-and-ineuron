// class Product{
//     constructor(itemName,price,discount,productCode) {
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }
// let pencit = new Product("pencit",20,2,'p10')
// console.log(pencit)





// const Product1 = class Product{
//     constructor(itemName,price,discount,productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }
// let chair = new Product1("chair",499,15,'c10')
// chair.buy = function(){
//     console.log("Buy succesfull")
// }
// console.log(chair)
// console.log(chair.buy())
// console.log(Product1.name)




const  Product = class {
    constructor(itemName,price,discount,productCode){
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
      get getDiscount(){
        return this.discount;
      }
      set setDiscount(value){
        this.discount = value
      }
      discountValue(){
        return this.discount*this.price/100
      }
}

let pen = new Product("pen",10,2,'p10')
console.log(pen)
pen.getProduct
console.log(pen.setDiscount)
console.log(pen)

















