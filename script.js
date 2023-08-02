class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    addProduct({title, description, price, thumbnail, code, stock}) {

        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Los campos tienen que ser obligatorios");

            return;
        } 

        if (this.products.some((product) => product.code === products.code)) {
            console.log("El código ya existe");

            return;
        }

        this.id++

        this.products.push({id: this.id, title, description, price, thumbnail, code, stock})
    }

    getProducts() {
        return this.products;
    }

    getProductById() {
        const product = this.products.find((product) => product.id === id);
        if(!product) {
            console.error("Not found");
        }
        
        return product;
    }
}

const productManager = new ProductManager();

productManager.addProduct({nombre:'Remera', description:'Remera negra', price: 5000, thumbnail:'img', code: 'AAA', stock: 8 });
productManager.addProduct({nombre:'Pantalón', description:'Pantalón azul', price: 8000, thumbnail:'img', code: 'BBB', stock: 5 });
productManager.addProduct({nombre:'Zapatilla', description:'Zapatilla blanca', price: 12000, thumbnail:'img', code: 'CCC', stock: 3 });
productManager.addProduct({nombre:'Gorra', description:'Gorra amarilla', price: 4000, thumbnail:'img', code: 'DDD', stock: 6 });