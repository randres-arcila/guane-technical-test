<template>
  <div class="home">

    <router-link :to="{name: 'NewItem'}"> 
      <button type="button" class="btn btn-outline-success" > Crear Item </button>
    </router-link>
    
    <div v-for = "task in todoList" :key="task.title"> 
      <router-link :to="{name: 'Item', params:{details:task}}">
        <Card :info=task>
        </Card>
      </router-link>
    </div>

    
  </div>
  
</template>

<script>
import {mapState} from 'vuex';
import Card from '../components/Card.vue'

export default {
  name: 'Home',

  computed:{
    ...mapState(['todoList'])
  }, 
 
  data(){
    return {
    }
  },

  components:{
    Card
  },

  methods:{

    //...mapMutations(['add']),
    //...mapActions(['add']),

  }
}
</script>
