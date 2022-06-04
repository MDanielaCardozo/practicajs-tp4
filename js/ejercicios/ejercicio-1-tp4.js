/* 1- Crea un objeto llamado auto que tenga algunas características 
como el color, marca, modelo y si está encendido o apagado.
Crea los métodos necesarios para permitir encender y apagar el auto.*/

let auto = {
    color: 'Blanco',
    marca: 'Fiat',
    modelo: '500',
    estadoAuto:'',
    estado: () =>{ if(alert('Desea encender el auto?') != null){
       //document.write(`El auto esta encendido ON`);
        auto.estadoAuto = `ON`;
    } else {
        //document.write(`El auto esta apagado OFF`);
        auto.estadoAuto = `OFF`;
    }
}
}

auto.estado();

let claves = Object.keys(auto);

for(let indice = 0; indice < 4; indice ++){
    document.write(`<br>${claves[indice]}: ${auto[claves[indice]]}`)
}