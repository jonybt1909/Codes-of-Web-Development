class Producto{
    
    static contadorProductos = 0;

    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio;
    }

    toString(){
        return `idProducto: ${this._idProducto} , nombre: ${this._nombre},precio: $${this._precio} `;
    }
}


class Orden{
    
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this.contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log("No se pueden agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = "";
        for(let producto of this._productos){
            productosOrden += producto.toString() + " ";
        }

        console.log(`Orden: ${this._idOrden} Total:${this.calcularTotal()}`);
    }
}