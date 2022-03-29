<template>
  <div class="home">
    <Navegacion/>
    <ListaAdornos/>
    <Contacto/>
  </div>
</template>

<script>
import Navegacion from "../components/Navegacion.vue";
import ListaAdornos from "../components/ListaAdornos.vue";
import Contacto from "../components/Contacto.vue";

export default {

  name: 'Adornos',
  components: {
    Navegacion,
    ListaAdornos,
    Contacto
  }

}
</script>
