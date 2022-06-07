/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la 
descripción del estado de la cuenta.
Rectángulos*/

class Cuenta{
    constructor(propiedadTitular, propiedadSaldo, propiedadEstado){
        this.propiedadTitular = propiedadTitular;
        this.propiedadSaldo = propiedadSaldo; 
        this.propiedadEstado = propiedadEstado;
    }
    ingresar(){
        let deposito = parseFloat(prompt('Ingrese el monto de dinero que desea depositar.'));
        if(deposito != null){
           this.propiedadSaldo = this.propiedadSaldo + deposito;
           return alert(`El deposito se realizo exitosamente.`); 
        } else {
            return alert(`No se puedo realizar el deposito.`);
        }
    }
    extraer(){
        let extraccion = parseFloat(prompt('Ingrese el monto que desea extraer.'));
        if(extraccion != null && this.propiedadSaldo >= extraccion){
            this.propiedadSaldo = this.propiedadSaldo - extraccion;
            return alert(`La extraccion se realizo exitosamente.`); 
         } else {
             return alert(`No se puedo realizar la extraccion.`);
         }
    }
    informar(){
        if(this.propiedadSaldo > 0){
            this.propiedadEstado = "Activa";
            return alert('Su cuenta se encuentra activa.');
        } else {
            this.propiedadEstado = "desactiva";
            return alert('Debe ingresar dinero para mantener su cuenta activa.');
        }
    }
    mostrarDatos(){
        document.write(`<br>
        <ul>
        <li>Titular de la cuenta: ${this.propiedadTitular}</li>
        <li>Saldo: ${this.propiedadSaldo}</li>
        <li>Estado: ${this.propiedadEstado}</li>
        </ul>`);
    }
}

let cuentaAlex = new Cuenta('Alex', 0, 'Desactivada');
cuentaAlex.ingresar();
cuentaAlex.extraer();
cuentaAlex.informar();
cuentaAlex.mostrarDatos();
