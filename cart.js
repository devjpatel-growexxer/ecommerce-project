class Cart{
    constructor(){
        this.items = [];
    }

    getTotal(){
        if(this.items.length === 0){
            return 0;
        }
        return this.items.reduce((sum,item) => sum + item.price, 0);
    }
}