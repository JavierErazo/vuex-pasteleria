<template>
    <h2>{{$store.state.nav_link_headers[7]}}</h2>
    <ul class="listaProductosRestantes">
        <li v-for="adorno in $store.state.adornos" :key="adorno.nombre" class="flexbox productoRestante">
            <div>{{adorno.nombre}} ({{adorno.contenido}})</div>
            <div>{{$store.state.nav_link_headers[8]}}: </div>
            <div>{{adorno.restantes}}</div> 
        </li>    
    </ul>
</template>
<script>
export default {
    name: 'ListaAdornosRestantes',
}
</script>
