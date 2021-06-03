<template>
  <div class="card mb-3" style="max-width: 540px" :class= "resaltar">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-fluid" :src="cardInfo.image" alt="Kitten" style="border:10px solid white" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ cardInfo.title }}</h5>
          <p class="card-text">{{ cardInfo.description }}</p>
          <p class="card-text">
            <small class="text-muted">{{ cardInfo.date }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  
  props: {
    info: Object,
  },

  data() {
    return {
      cardInfo: this.info,
    };
  },

  computed:{
    resaltar(){
      return{
        "text-white bg-info": this.cardInfo.isImportant
      }
    }
  }

  
};
</script>