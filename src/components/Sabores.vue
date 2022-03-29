<template>
    <p>{{$store.state.form_label_two}}</p>
    <div v-for="sabor in $store.state.sabores" :key="sabor.nombre">
        <input @change="agregarSabor($event, sabor.precio);" v-model="sabores"  class="inputBox"  type="checkbox" :value="sabor.nombre">
        <label class="labelBox">{{sabor.nombre}} ({{sabor.sabor}})</label>
        <span class="precioSpan">${{parseFloat(sabor.precio)}}</span>    
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            sabores: [],
            total: 0
        }
        
    },
    methods:{
        agregarSabor(e, precio){
            this.agregarPrecio(e, precio);
            this.$emit("agregarSabores", this.sabores);
        },

        agregarPrecio(e, precio){
            if(e.target.checked){
                this.total += precio;
            }else{
                this.total -= precio;
            }
            
            this.$emit("agregarTotalSabores", this.total);
        }
    },

    name: 'Sabores',
    
    emits: ["agregarSabores", "agregarTotalSabores"],
    
}
</script>

<style>

p{
    margin-top: 50px
}

</style>