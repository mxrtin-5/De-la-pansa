class Producto {
    constructor(id, nombre, descripcion,  precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.cantidad = cantidad
    }
}

const hamburguesa1 = new Producto ('1', 'Triple cheese','no se', 3000, 1);
const hamburguesa2 = new Producto ('2', 'Homenaje big mac','no se', 2640, 1);   
const hamburguesa3 = new Producto ('3', 'De la huerta','no se', 2640, 1);
const hamburguesa4 = new Producto ('4', 'De la panza','no se', 3100, 1);
const hamburguesa5 = new Producto ('5', 'Stacker','no se', 2640, 1);
const hamburguesa6 = new Producto ('6', 'Pesto','no se', 2580, 1);
const hamburguesa7 = new Producto ('7', 'Tana','no se', 2470, 1);
const hamburguesa8 = new Producto ('8', 'Smashing onion','no se', 2580, 1);
const hamburguesa9 = new Producto ('9', 'Simple cheese', 'no se ', 2000, 1);
const hamburguesa10 = new Producto ('10', 'Puerca','no se ', 2640, 1);
const hamburguesa11 = new Producto ('11', 'Old school','no se ', 2470, 1);
const hamburguesa12 = new Producto ('12', 'Doble cheese','no se ', 2360, 1);
const hamburguesa13 = new Producto ('13', 'Fija','no se ', 2580, 1);
const hamburguesa14 = new Producto ('14', 'Big classic', 'no se', 580, 1);

const misHamburguesas = [hamburguesa1, hamburguesa2, hamburguesa3, hamburguesa4, hamburguesa5, hamburguesa6,hamburguesa7,hamburguesa8, hamburguesa9, hamburguesa10, hamburguesa11, hamburguesa12, hamburguesa13, hamburguesa14];

const extra1 = new Producto ('15', 'Dedos de muzzarella', 'no se', 2070, 1);
const extra2 = new Producto ('16', 'Aros de cebolla', 'no se', 2070, 1);
const extra3 = new Producto ('17', 'Papas', 'no se', 2000, 1);
const extra4 = new Producto ('18', 'Papas con chedar', 'no se', 2400, 1);
const extra5 = new Producto ('19', 'Papas Panza', 'no se', 2180, 1);
const extra6 = new Producto ('20', 'Panzada', 'no se', 5100, 1);

const extras = [extra1, extra2, extra3, extra4, extra5,extra6];
