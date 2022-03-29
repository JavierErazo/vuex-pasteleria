<template>
    <form @submit.prevent="handleSubmit">
        <label class="labelText">{{$store.state.nombre_label}}</label>
        <input required class="inputText" type="text" placeholder="Nombre" v-model="nombre_cliente">
        
        <label class="labelText">{{$store.state.telefono_label}}</label>
        <input required class="inputText" type="tel" placeholder="Teléfono " v-model="telefono">
        
        <label class="labelText">{{$store.state.correo_label}}</label>
        <input required class="inputText" type="email" placeholder="Correo Electrónico" v-model="correo">
        
        <Tamano @agregarTamano="establecerTamano($event)" @agregarTotalTamano="establecerTotalTamano($event)" />
        <Sabores :checked="checked" @agregarSabores="establecerSabores($event)" @agregarTotalSabores="establecerTotalSabores($event)"/>
        <Adornos @agregarAdornos="establecerAdornos($event)" @agregarTotalAdornos="establecerTotalAdornos($event)"/>

        <p>{{$store.state.form_label_four}}</p>
        <textarea v-model="detalles"></textarea>
        
        <p id="total_pagar"> TOTAL A PAGAR: ${{total}}</p>
        <p :style="enviadoStyle">SU ORDEN HA SIDO RECIBIDA. PRONTO RECIBIRÁ RESPUESTA NUESTRA.</p>
        <div class="formButtons">
            <input class="formButton" type="reset">
            <input class="formButton" type="submit">
        </div>
    </form>
</template>

<script>
import Tamano from "../components/Tamano.vue"
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";
export default {

    name: 'FormularioPedido',
    
    components: {
        Tamano,
        Sabores,
        Adornos
    },
    
    data(){
      return{
          nombre_cliente: '',
          telefono: '',
          correo: '',
          tamano: '',
          sabores: [],
          adornos: [],
          detalles: '',
          total_tamano: 0,
          total_sabores: 0,
          total_adornos: 0,
          total: 0,
          enviadoStyle: {
                display: 'none',
                backgroundColor: '#ff95cb',
                padding: '10px',
                fontWeight: 'bold',
                fontSize: '14px',
                textAlign: 'center',
                borderRadius: '10px '
          }
      }  
    },


    computed:{
        handleSubmit(){
            
            this.mostrarMensaje();
            this.$store.commit('agregarPedido', {
                nombre_cliente: this.nombre_cliente, telefono: this.telefono, 
                correo: this.correo, tamano: this.tamano, sabores: this.sabores.join(", "), 
                adornos: this.adornos.join(", "), detalles: this.detalles, total: this.total
            }); 
            this.borrarForm();
            
        }
    },
    
    watch: {
        total_tamano:function(){
           this.establecerTotal();    
        },
        total_sabores:function(){
           this.establecerTotal();
        },
        total_adornos:function(){
            this.establecerTotal();

        }    
    },

    methods: {
      
        establecerTamano(e){
            this.tamano = e;
        },

        establecerSabores(e){
            this.sabores = e;
        },

        establecerAdornos(e){
            this.adornos = e;
        },

        establecerTotalTamano(e){
            this.total_tamano = e;
        },

        establecerTotalSabores(e){
            this.total_sabores = e;
        },

        establecerTotalAdornos(e){
            this.total_adornos = e;
        },

        establecerTotal(){
            this.total = this.total_tamano + this.total_sabores + this.total_adornos;    
        },


        mostrarMensaje(){
            this.enviadoStyle.display = 'block';
        },

        borrarForm(){
            this.nombre_cliente = '';
            this.telefono = '';
            this.correo = '';   
        }
    }
}
</script>

<style scoped>
    p{
        display: flex;
        justify-content: flex-end;    
    }

    #total_pagar{
        background-color: #ff95cb;
        color: #19408f;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 10px;
        font-weight: bold;
    }

    #pedido_enviado{
        margin: 0 auto;
        z-index: 2;
        display: none;
    }
</style>