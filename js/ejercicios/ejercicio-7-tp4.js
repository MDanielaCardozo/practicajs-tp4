/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. 
Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar 
mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o 
no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.*/

class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
    
    aniadirContacto(Contacto){
        for(Contacto = 0; Contacto <= 10; Contacto ++){

        }
    }

    existeContacto(Contacto){
        if(Contacto === Contacto){
            document.write(`El contacto ${Contacto} ya existe`)
        }
    }

    listarContacto(){

    }

    buscarContacto(nombre){

    }

    eliminarContacto(){

    }

    agendaLlena(){
        
    }

    huecosLibre(){

    }
}
