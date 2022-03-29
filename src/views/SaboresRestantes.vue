<template>
  <div class="home">
    <NavegacionPastelero/>
    <ListaSaboresRestantes/>
    <Contacto/>
  </div>
</template>

<script>
import NavegacionPastelero from "../components/NavegacionPastelero.vue";
import ListaSaboresRestantes from "../components/ListaSaboresRestantes.vue";
import Contacto from "../components/Contacto.vue";

export default {

  name: 'SaboresRestantes',
  components: {
    NavegacionPastelero,
    ListaSaboresRestantes,
    Contacto
  }

}
</script>
