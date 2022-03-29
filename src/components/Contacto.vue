<template>
    <footer class="flexboxCol">
        <div>{{$store.state.nav_link_headers[4]}}</div>
        <div>{{$store.state.direccion}}</div>
        <div>{{$store.state.telefono}}</div>
        <div>{{$store.state.horario_atencion}}</div>
    </footer>
</template>

<script>
export default {
    name: 'Contacto',
}
</script>