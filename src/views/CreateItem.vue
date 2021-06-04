<template>
  <div>
    <h1>Crear Nuevo Item</h1>
    
    <form>
    <div class="container">
      <img
        :src="form.image"
        class="img-fluid"
        alt="Kitten"
        width="300"
        height="500"
        style="border:25px solid white"
      />

      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label first">Titulo*</label>
        <div class="col-sm-10">
          <input
            v-model="form.title"
            type="text"
            class="form-control"
            id="titulo"
            required/>
        </div>
      </div>

      <div class="row mb-3">
        <label for="example-date-input" class="col-2 col-form-label first"
          >Fecha*
        </label>
        <div class="col-10">
          <input
            v-model="form.date"
            class="form-control"
            type="date"
            value="2021-01-10"
            id="fecha"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label first"
          >Descripción*</label
        >
        <div class="col-sm-10">
          <textarea
            v-model="form.description"
            class="form-control"
            id="descripcion"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div class="row mb-3">
        <label for="textArea" class="col-sm-2 col-form-label first"
          >Observación*</label
        >
        <div class="col-sm-10">
          <textarea
            v-model="form.observation"
            class="form-control"
            id="observacion"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div class="row mb-3">
        <div class="clo-sm-10">
          <div class="custom-control custom-switch">
            <input
                v-model="form.isImportant"
              type="checkbox"
              class="custom-control-input"
              id="check"
            />
            <label class="custom-control-label importante" for="customSwitch1"
              >Importante</label
            >
          </div>
        </div>
      </div>

      
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="validate(form)"
        >
          Confirmar
        </button>
      
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import {required} from 'vuelidate/lib/validators';

export default {
  mounted() {
    let vue = this;
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(function(response) {
        vue.form.image = response.data.message;
      });
  },
  data() {
    return {
      form: {
        image: "",
        title: "",
        date: "",
        description: "",
        observation: "",
        isImportant: false,
      },
    };
  },

  methods: {
    validate(form){
        if (this.$v.$invalid){
            alert("Hay campos sin llenar");
            return false;
        }
        this.add(form)
        this.$router.push('/')
    },
    ...mapActions(["add"]),

  },

  validations:{
      form:{
          title:{
              required
          },
          description:{
              required
          },
          date:{
              required
          },
          observation:{
              required
          }
      }
  }
};
</script>

<style>
    .first{
        font-weight: bold;
        font-family: Arial;
        font-size: 16pt
    }
    .importante{
        font-family: Arial;
        font-size: 14pt
    }
</style>