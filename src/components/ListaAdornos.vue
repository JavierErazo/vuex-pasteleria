<template>
    <h2 id="adornos">{{$store.state.nav_link_headers[1]}}</h2>
    <ul class="listaProductos flexBoxCol">
        <li v-for="adorno in $store.state.adornos" :key="adorno.nombre" class="flexbox producto"> <span>{{adorno.nombre}} ({{adorno.contenido}})</span> <span class="flexbox">............................................... ${{adorno.precio}}</span></li>
    </ul>
</template>

<script>
export default {
    name: 'ListaAdornos',
}
</script>
