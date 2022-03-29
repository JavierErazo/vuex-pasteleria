<template>
    <h2 id="pasteles">{{$store.state.nav_link_headers[6]}}</h2>
    <ul class="listaProductosRestantes">
        <li v-for="sabor in $store.state.sabores" :key="sabor.nombre" class="flexbox productoRestante">
            <div>{{sabor.nombre}} ({{sabor.sabor}})</div>
            <div>{{$store.state.nav_link_headers[8]}}: </div>
            <div>{{sabor.restantes}}</div> 
        </li>    
    </ul>
</template>
<script>
export default {
    name: 'ListaSaboresRestantes',
}
</script>