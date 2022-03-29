<template>
    <h1>Magi-pedidos en proceso:</h1>
    <table>
        <tr>
            <th id="cliente_th">Cliente</th>
            <th id="telefono_th">Teléfono</th>
            <th id="correo_th">Correo</th>
            <th id="descripcion_th">Descripcion</th>
            <th id="detalles_th">Detalles</th>
            <th id="total_th">Total</th>
        </tr>
        <tr v-for="pedido in $store.state.pedidos" :key="pedido.nombre_cliente">
            <td>{{pedido.nombre_cliente}}</td>
            <td>{{pedido.telefono}}</td>
            <td>{{pedido.correo}}</td>
            <td>{{pedido.tamano}} | {{pedido.sabores}} | {{pedido.adornos}}</td>
            <td>{{pedido.detalles}}</td>
            <td>${{parseFloat(pedido.total)}}</td>
        </tr>
    </table>    
</template>



<script>
export default {

    data(){
        return {
        }
    },

    methods:{
        
    },
    
    name: 'ListaPedidos'

}
</script>


<style>

table{
    margin: 0 auto;
    width: 100%;
    border-radius: 10px;
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
}

tr{
    text-align: center;
}

th{
    color: #ff95cb;
    font-size: 14px;
    background-color: #19408f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

td{

    background: #497adc;
    color: white;
    font-size: 12px;
    padding: 10px;
}


p{
    margin-top: 50px
}

#cliente_th{
    width: 10%;
}

#telefono_th{
    width: 10%;
}

#correo_th{
    width: 10%;
}

#descripcion_th{
    width: 30%;
}


#detalles_th{
    width: 30%;
}


#total_th{
    width: 10%;
}

</style>