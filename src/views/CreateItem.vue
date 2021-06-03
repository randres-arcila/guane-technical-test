<template>
    <div>
        <h1>Crear Nuevo Item</h1>
        <form>
            
            <img :src= "imagen" class="img-fluid" alt="Kitten" width="300" height="500" style="border:25px solid white">

            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Titulo</label>
                <div class="col-sm-10">
                    <input v-model="form.title" type="text" class="form-control" id="inputEmail3">
                </div>
            </div>

            <div class="row mb-3">
                <label for="example-date-input" class="col-2 col-form-label">Fecha</label>
                <div class="col-10">
                    <input v-model="form.date" class="form-control" type="date" value="2021-01-10" id="example-date-input">
                </div>
            </div>

            <div class="row mb-3">
                <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Descripción</label>
                <div class="col-sm-10">
                    <textarea v-model="form.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

            <div class="row mb-3">
                <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Observación</label>
                <div class="col-sm-10">
                    <textarea v-model="form.observation" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>

            <div class="row mb-3">
                <div class="clo-sm-10 offset-sm-2">
                    <div class="form-check form-switch">
                        <input v-model="form.isImportant" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Importante</label>
                    </div>
                </div>
            </div>

            <router-link :to="{name: 'Home'}">
                <button type="button" class="btn btn-outline-success" @click="add(form)" >Confirmar</button>
            </router-link>
             
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import axios from 'axios'
//let url = vue.imagen;

export default {
    mounted(){
        let vue = this;
        //console.log("Esto se carga automaticamente")
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            vue.imagen = response.data.message;
            vue.form.image = response.data.message;
        })
    },
    data(){
        return{
            imagen: '',
            form:{image: "", title:"", date:"2021-02-06", description:"", observation:"", isImportant:false}
        }
    },
    
    methods:{

        ...mapActions(['add']),
        
        imprimir(){
        console.log(this.form)
        }

  }
}
</script>
