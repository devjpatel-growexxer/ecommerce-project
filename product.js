class Product{
    constructor(name,price){
        this.name = name;
        this.prcie = price;
        this.discount = 0;
    }

    getPrice(){
        const tax = 0.18 //18% tax
        const discountedPrice = this.price - (this.price * this.discount / 100);
        return discountedPrice + (discountedPrice * tax);
    }
}

module.exports = Product;