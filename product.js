class Product{
    constructor(name,price){
        this.name = name;
        this.prcie = price;
        this.discount = 0;
    }

    getPrice(){
<<<<<<< HEAD
        return this.price - (this.price * this.discount / 100) ;
=======
        const tax = 0.18 //18% tax
        return this.price + (this.price * tax);
>>>>>>> feature-tax-calculation
    }
}

module.exports = Product;