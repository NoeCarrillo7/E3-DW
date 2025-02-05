import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';

  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  }

  productos = [
    {id: 1, descripcion: 'producto1', precio: 10},
    {id: 2, descripcion: 'producto2', precio: 20},
    {id: 3, descripcion: 'producto3', precio: 30},
    {id: 4, descripcion: 'producto4', precio: 40},
    {id: 5, descripcion: 'producto5', precio: 50}
  ]

  //Funcion para agregar un producto al arreglo
  agregarProducto(){

    //Validar el ID
    if(this.producto.id == 0) {
      alert('El id debe ser diferente de 0')
      return
    }
    for(let i = 0; i < this.productos.length; i++){
      if(this.producto.id = this.productos[i].id){
        alert('Ya existe un producto con el ID');
        return;
      }
    }

    //Dar de alta el producto
    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    })

    //Reiniciar el objeto
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  //Funcion para seleccionar un producto existente
  seleccionarProducto(productoSeleccionado:{id: number; descripcion: string; precio: number}){
    this.producto.id = productoSeleccionado.id
    this.producto.descripcion = productoSeleccionado.descripcion
    this.producto.precio = productoSeleccionado.precio
  }

  //Funcion para modidificar el producto
  modificarProducto(){
    for(let i = 0; i < this.productos.length; i++){
      if(this.producto.id == this.productos[i].id){
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        //Resetear el objeto producto
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;

      }
    }
    alert('No existe el ID')
  }

  //Funcion para eliminar un producto
  eliminarProducto(id: number){
    for(let i = 0; i < this.productos.length; i ++){
      if(id == this.productos[i].id){
        this.productos.splice(i, 1)
        return
      }
    }
  }
}
