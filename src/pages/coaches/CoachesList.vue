<template>
<section>Filter</section>
<section>

  <base-card>
    <div class="controls">
      <base-button>Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <CoachItem v-for="coach in filteredCoaches"
                 :key="coach.id"
                 :id="coach.id"
                 :first-name="coach.firstName"
                 :last-name="coach.lastName"
                 :rate="coach.hourlyRate"
                 :areas="coach.areas"></CoachItem>
    </ul>

    <h3 v-else> No coaches found </h3>
  </base-card>
</section>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";


export default {
  name: "CoachesList",
  components: { CoachItem },
  computed:{
    filteredCoaches(){
      return this.$store.getters['coaches/coaches']
    },

    hasCoaches(){
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>

<style scoped>

ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls{
  display: flex;
  justify-content: space-between;
}

</style>