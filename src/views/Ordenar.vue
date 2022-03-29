<template>
  <div class="ordenar">
    <Navegacion/>
    <FormularioPedido/>
  </div>
</template>

<script>
import Navegacion from "../components/Navegacion.vue";
import FormularioPedido from "../components/FormularioPedido.vue";
export default {

  name: 'Ordenar',
  components: {
    Navegacion,
    FormularioPedido
  }

}
</script>
