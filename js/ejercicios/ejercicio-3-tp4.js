/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/



class Rectangulo {
    constructor ( altura = 0, ancho = 0 ) {
      this._altura = altura;
      this._width = ancho;
    }
  
    set cambiarAltura( valor ) {
      this._altura = valor;
    }
  
    set cambiarAncho( valor ) {
      this._ancho = valor;
    }
  
    get perimetro () {
        return (this._altura * 2) + (this._ancho * 2);
    }

    get area() {
      return this._altura * this._ancho;
    }
  }

  let rectanguloUno = new Rectangulo(2, 4);
  