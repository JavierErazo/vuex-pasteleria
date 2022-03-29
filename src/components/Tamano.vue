<template>
    <p>{{$store.state.form_label_one}}</p>
    <div v-for="tamano in $store.state.tamanos" :key="tamano.nombre">
        <input required name="tamano" @change="agregarTamano(tamano.precio)" v-model="tamanos" class="inputBox"  type="radio" :value="tamano.nombre">
        <label class="labelBox">{{tamano.nombre}} ({{tamano.cantidad}})</label>
        <span class="precioSpan">${{parseFloat(tamano.precio)}}</span>    
    </div>
</template>

<script>
export default {

    data(){
        return {
            tamanos: '',
            total: 0
        }
    },

    methods:{
        agregarTamano(precio){
            this.agregarPrecio(precio);
            this.$emit("agregarTamano", this.tamanos);
            
        },

        agregarPrecio(precio){
            this.total = precio;
            this.$emit("agregarTotalTamano", this.total);
        }
    },
    
    name: 'Tamano.vue',

    emits: ["agregarTamano", "agregarTotalTamano"],
}
</script>


<style>

p{
    margin-top: 50px
}

</style>