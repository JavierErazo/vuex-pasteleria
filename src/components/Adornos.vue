<template>
    <p>{{$store.state.form_label_three}}</p>

    <div v-for="adorno in $store.state.adornos" :key="adorno.nombre">
        <input @change="agregarAdorno($event, adorno.precio)" v-model="adornos"  class="inputBox"  type="checkbox" :value="adorno.nombre">
        <label class="labelBox">{{adorno.nombre}} ({{adorno.contenido}})</label>
        <span class="precioSpan">${{parseFloat(adorno.precio)}}</span>    
    </div>

    
        <span class="precioSpan">${{parseFloat($store.state.adornos[0].precio.toLocaleString('en'))}}</span>
</template>

<script>
export default {

    data(){
        return {
            adornos: [],
            total: 0
        }
    },

    methods:{
        agregarAdorno(e, precio){
            this.agregarPrecio(e, precio);
            this.$emit("agregarAdornos", this.adornos);
        },

        agregarPrecio(e, precio){
            if(e.target.checked){
                this.total += precio;
            }else{
                this.total -= precio;
            }
            this.$emit("agregarTotalAdornos", this.total);
        }
    },
    
    name: 'Adornos.vue',

    emits: ["agregarAdornos", "agregarTotalAdornos"],
    
}

</script>
<style>

p{
    margin-top: 50px
}

</style>