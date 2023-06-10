const fs = require('fs')
//const crypto = require('crypto')

class ProductManager {

    constructor(path) {
        this.#path = path
        //this.products = [];
    }

    read = () => {
        if (fs.existsSync(this.path)) {
            return fs.promises.readFile(this.path, 'utf-8').then(r => JSON.parse(r))
        } else return []
    }

    addProduct = async (title, description, price, thumbnail, code, stock) => {
        const product = { title, description, price, thumbnail, code, stock}
        const list = await this.getProduct()
        list.push(product)

        await fs.promises.writeFile(this.path, JSON.stringify(list))
    }    

    
    getProduct = async()=>{
        try {
            const data = await fs.promises.readFile(this.path)
            const dataObj = JSON.parse(data) // Convertimos de string a objeto

            return dataObj
        } catch (error) {
            console.log('No se encontro el archivo, se devuelve vacio')
            return []
        }
    }    
        
    
        const list = await this.getProduct()
        list.push(product) 

        // Escribimos el archivo (o se sobreescribe si ya existe)
        await fs.promises.writeFile(this.filename, JSON.stringify(list))

        
        const existingProduct = this.products.find((product) => product.code === code);
        if (existingProduct) {
          console.error("Error: el código ya existe");
          return;
        }


        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Error: faltan datos del producto");
            return;
        }


        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        
        };

        this.products.push(newProduct);
        console.log("Producto agregado:", newProduct);
    

   

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
        console.error("Producto no encontrado");
        return;
        }
        return product;
    }

   /* updateProduct(){

    }

    deleteProduct(){
        //fs.unlinkSync(filename)
    }*/

}






async function run() {
    const manager = new ManagerUser('db.json')
    await manager.addProduct('R2', 'Verbel', 23, 'front')

    console.log(await manager.getProduct())
}

run()

const manager = new ProductManager('db.json')
console.log('Se lee bien los productos', manager)

    
