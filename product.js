class Product{
    constructor(name,price){
        this.name = name;
        this.prcie = price;
        this.discount = 0;
    }

    getPrice(){
        return this.price;
    }
}

module.exports = Product;