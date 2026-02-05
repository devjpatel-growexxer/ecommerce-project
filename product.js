class Product{
    constructor(name,price){
        this.name = name;
        this.prcie = price;
        this.discount = 0;
    }

    getPrice(){
        const tax = 0.18 //18% tax
        return this.price + (this.price * tax);
    }
}

module.exports = Product;