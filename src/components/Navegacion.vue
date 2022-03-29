<template>
    <nav id="nav_barra">
        <ul id="nav_lista" class="flexbox">
            <li><router-link to="/pasteles" tag="a">{{$store.state.nav_link_headers[0]}}</router-link></li>
            <li><router-link to="/adornos" tag="a">{{$store.state.nav_link_headers[1]}}</router-link></li>
            <li><router-link to="/ordenar" tag="a">{{$store.state.nav_link_headers[2]}}</router-link></li>
            <li><router-link to="/pedidos" tag="a">{{$store.state.nav_link_headers[10]}}</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navegacion',
}
</script>