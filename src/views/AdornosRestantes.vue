<template>
  <div class="home">
    <NavegacionPastelero/>
    <ListaAdornosRestantes/>
    <Contacto/>
  </div>
</template>

<script>
import NavegacionPastelero from "../components/NavegacionPastelero.vue";
import ListaAdornosRestantes from "../components/ListaAdornosRestantes.vue";
import Contacto from "../components/Contacto.vue";

export default {

  name: 'AdornosRestantes',
  components: {
    NavegacionPastelero,
    ListaAdornosRestantes,
    Contacto
  }

}
</script>
