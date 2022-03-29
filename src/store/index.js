import { createStore } from 'vuex'

export default createStore({
  state: {

    nav_link_headers: ["PASTELES", "ADORNOS", "ORDENAR", "PEDIDOS", "CONTACTO", "TAMAÑOS",
                      "SABORES RESTANTES", "ADORNOS RESTANTES", "CANTIDAD", "CLIENTE", "PASTELERO"], 
  
    tamanos: [

      {nombre: "Chico", cantidad: "4 personas", precio: 200.00},
      {nombre: "Mediano", cantidad: "8 personas", precio: 250.00},
      {nombre: "Grande", cantidad: "12 personas", precio: 300.00}

    ] , 
    sabores: [
      {nombre: "Beso de Bruja", sabor: "Vainilla", precio: 50.00, restantes: 10},
      {nombre: "Amarre de Amor", sabor: "Fresa", precio: 50.00, restantes: 3},
      {nombre: "Mago Merlín", sabor: "Chocolate Dulce", precio: 50.00, restantes: 5},
      {nombre: "Gato Negro", sabor: " Chocolate Oscuro", precio: 70.00, restantes: 1},
      {nombre: "Bruja Nocturna", sabor: "Coco", precio: 70.00, restantes: 7},
      {nombre: "Ratón Crepuscular", sabor: "Capuchino", precio: 70.00, restantes: 20},
      {nombre: "Conejo Embrujado", sabor: "Zanahoria", precio: 50.00, restantes: 2},
      {nombre: "Chango Misterioso", sabor: "Plátano", precio: 50.00, restantes: 14},
    ],

    adornos: [
      {nombre: "Alitas de Murciélago", contenido: "Gomitas azucaradas", precio: 50.00, restantes: 30},
      {nombre: "Polvos Mágicos", contenido: "Chispitas de sabores", precio: 50.00, restantes: 30},
      {nombre: "Patas de Araña", contenido: "Piezas de fondant", precio: 60.00, restantes: 23},
      {nombre: "Sombrero de Brujita", contenido: "Piezas de fondant", precio: 60.00, restantes: 50},
      {nombre: "Barbitas de Mago", contenido: "Piezas de fondant", precio: 60.00, restantes: 30},
        
    ],

    direccion: "Llano Mágico MZ7 LT8 Colonia Amsterdam CP 01590",

    telefono: "55 5221 4987",

    horario_atencion: "Lunes a Viernes: 10:00 AM - 8:00 PM\nSábado y Domingo: 12:00 PM - 6:00 PM",

    form_label_one: "Elige el tamaño del pastel. Todos los pasteles son de tres leches.",
    form_label_two: "Seleccione el sabor de su pastel: (El pastel puede tener más de 1 sabor).",
    form_label_three: "Seleccione los adornos de su pastel:",
    form_label_four: "¿Algún detalle u observación en particular con respecto al pastel y/o adornos?",
    nombre_label: "Ingrese su nombre completo, persona mágica:",
    telefono_label: "Ahora, su télefono:",
    correo_label: "Por último, su correo:",

    pedidos: [
      //cliente, tel, correo, pedido, tamaño, sabores, adornos, detalles, 
     {nombre_cliente: "Persona Prueba", telefono: "5548784912", correo: "correo@prueba.com", tamano: "Mediano", sabores: "Beso de Bruja, Chango Misterioso", adornos: "Alitas de Murciélago, Patas de Araña, Barbitas de Mago", 
     detalles: "Estos detalles son de prueba. Meramente para visualizar la información en el apartado de pedidos del pastelero.", total: 520.00}
    ]

  },
  getters: {
  },
  mutations: {

    agregarPedido(state, payload){
      console.log("STORE");

      state.pedidos.push({nombre_cliente: payload.nombre_cliente, 
        telefono: payload.telefono, correo: payload.correo, 
        tamano: payload.tamano, sabores: payload.sabores, 
        adornos: payload.adornos, detalles: payload.detalles, total: payload.total});
    }
  },
  actions: {
  },
  modules: {
  }
})
