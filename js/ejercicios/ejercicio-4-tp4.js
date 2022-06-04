  /* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar 
las propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores 
de los tres objetos instanciados.
*/

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimeDatos(){
        document.write(`<br>
        <ul>
        <li>Código: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>`
        )
    }
}

let sofa = new Producto('3399', 'Sofá', '$90.000');
let mesaComedor = new Producto('3377', 'Mesa de comedor', '$50.000');
let sillaComedor = new Producto('3366', 'Silla de comedor', '$25.000');

let objeto = Object.keys(sofa,mesaComedor,sillaComedor);

for(let indice = 0; indice < 3; indice ++){
    console.log(`<br>${objeto[indice]}: ${sofa[objeto[indice]]}`)
}
for(let indice = 0; indice < 3; indice ++){
    console.log(`<br>${objeto[indice]}: ${mesaComedor[objeto[indice]]}`)
}
for(let indice = 0; indice < 3; indice ++){
    console.log(`<br>${objeto[indice]}: ${sillaComedor[objeto[indice]]}`)
}

sofa.imprimeDatos();
mesaComedor.imprimeDatos();
sillaComedor.imprimeDatos();

