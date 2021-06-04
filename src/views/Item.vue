<template>
  <div class="home">
    <h1>Información del Item</h1>

    <div class="container" style="text-align: center">
      
      <table class="table table-bordered">
        <thead style="bg-black">
          <tr>
            <th scope="col">Titulo:</th>
            <th scope="col">{{details.title}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Fecha :</th>
            <td>{{details.date}}</td>
          </tr>
          <tr>
            <th scope="row">Descripción :</th>
            <td>{{details.description}}</td>
          </tr>
          <tr>
            <th scope="row">Observaciones :</th>
            <td colspan="3">{{details.observation}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link :to="{name: 'Home'}"> 
      <button type="button" class="btn btn-outline-secondary" > OK </button>
    </router-link>

  </div>
</template>

<script>
export default {
  
  props: {
    details: Object
  },
    
}
</script>