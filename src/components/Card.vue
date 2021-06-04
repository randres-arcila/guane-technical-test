<template>
  <div class="card" :class="highlight">
    <div class="row g-0">
      <div>
        <img
          class="img"
          :src="cardInfo.image"
          alt="Not Found"
          width="300"
          height="200"
        />
      </div>

      <div>
        <div class="card-body">
          <h5 class="card-title">{{ cardInfo.title }}</h5>
          <p class="card-text">{{ cardInfo.description }}</p>
        </div>
      </div>

      <div class="card-footer">
        <small class="text-muted">{{ cardInfo.date }}</small>
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

  computed: {
    highlight() {
      return {
        "text-black cardColor": this.cardInfo.isImportant,
      };
    },
  },
};
</script>

<style>
.img {
  object-position: top;
  border: 10px solid transparent;
  object-fit: cover;
}

.cardColor {
  background-color: #c3c5c5;
}

.card-title{
  font-weight: bold;
  font-family: Arial;
  font-size: 22pt
}

.card-text{
  font-family: Arial;
  font-size: 16pt
}
</style>
