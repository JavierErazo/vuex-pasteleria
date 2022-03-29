<template>
    <h2 id="pasteles">{{$store.state.nav_link_headers[5]}}</h2>
    <ul class="listaProductos" >
        <li v-for="tamano in $store.state.tamanos" :key="tamano.nombre" class="flexbox producto"> <span>{{tamano.nombre}} ({{tamano.cantidad}})</span> <span>...................................................................... ${{tamano.precio}}</span></li>
    </ul>
</template>
<script>
export default {
    name: 'ListaTamanos',
}
</script>