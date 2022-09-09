class Producto {
    constructor(id, nombre, importe, categoria, descripcion) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
        this.descripcion = descripcion
    }
    precioFinal() {
        return '$ ' + parseFloat(((this.importe * IVA) + this.importe).toFixed(2))
    }
}    