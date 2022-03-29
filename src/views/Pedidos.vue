<template>
  <div class="home">
    <NavegacionPastelero/>
    <ListaPedidos/>
    <Contacto/>
  </div>
</template>

<script>
import NavegacionPastelero from "../components/NavegacionPastelero.vue";
import ListaPedidos from "../components/ListaPedidos.vue"
import Contacto from "../components/Contacto.vue";

export default {

  name: 'Pedidos',
  components: {
    NavegacionPastelero,
    ListaPedidos,
    Contacto
  }

}
</script>
