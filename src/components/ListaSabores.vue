<template>
    <h2 id="pasteles">{{$store.state.nav_link_headers[0]}}</h2>
    <ul class="listaProductos">
        <li v-for="sabor in $store.state.sabores" :key="sabor.nombre" class="flexbox producto"> 
            <span>{{sabor.nombre}} ({{sabor.sabor}})</span> <span>................................................................. ${{sabor.precio}}</span></li>
    </ul>
</template>
<script>
export default {
    name: 'ListaSabores',
}
</script>