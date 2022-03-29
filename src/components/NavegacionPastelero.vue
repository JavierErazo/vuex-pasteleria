<template>
    <nav id="nav_barra">
        <ul id="nav_lista" class="flexbox">
            <li><router-link to="/saboresRestantes" tag="a">{{$store.state.nav_link_headers[6]}}</router-link></li>
            <li><router-link to="/adornosRestantes" tag="a">{{$store.state.nav_link_headers[7]}}</router-link></li>
            <li><router-link to="/pedidos" tag="a">{{$store.state.nav_link_headers[3]}}</router-link></li>
            <li><router-link to="/pasteles" tag="a">{{$store.state.nav_link_headers[9]}}</router-link></li>
        </ul>
    </nav>
  <router-view/>
</template>