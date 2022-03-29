<template>
  <div class="home">
    <Navegacion/>
    <ListaTamanos/>
    <ListaSabores/>
    <Contacto/>
  </div>
</template>

<script>
import Navegacion from "../components/Navegacion.vue";
import ListaTamanos from "../components/ListaTamanos.vue";
import ListaSabores from "../components/ListaSabores.vue";
import Contacto from "../components/Contacto.vue";

export default {

  name: 'Pasteles',
  components: {
    Navegacion,
    ListaTamanos,
    ListaSabores,
    Contacto
  }

}
</script>
