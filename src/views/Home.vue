<template>
  <div class="home">
    <router-link :to="{ name: 'NewItem' }">
      <button type="button" class="btn btn-outline-secondary createTask" >
        Create Task
      </button>
    </router-link>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="task in todoList" :key="task.title">
          <div class="col">
              <Card class="cardStyle" :info="task" @click.native="goItem(task)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/Card.vue";

export default {
  name: "Home",

  computed: {
    ...mapState(["todoList"]),
  },

  data() {
    return {
      showModal: false
    };
  },

  components: {
    Card,
  },

  methods: {
    goItem(task) {
      this.$router.push({ name: "Item", params: { details: task } });
      console.log("hola");
    },
  },
};
</script>

<style>
.cardStyle {
  cursor: pointer;
  border-right: 4px solid #585757;
}
.contenedor{
  margin: 1rem -.75rem 0;
  border: solid #dee2e6;
}

.createTask{
  margin:10px; 
  position: absolute; 
  right: 40px; 
  top: 10px
}

</style>
