<template>
 <section>
   <base-card>
     <h2>{{ fullName }}</h2>
     <h3>${{rate}}/hour</h3>
   </base-card>
 </section>

  <section>
    <base-card>
      <header>
        <h2>
          Interested? reach out now!
        </h2>
        <base-button link :to="contactLink" ></base-button>
      </header>
    <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge v-for="area in selectedCoach.areas"
                  :key="area"
                  :type="area"
                  :title="area">
        <p>{{description}}</p>
      </base-badge>
    </base-card>
  </section>

</template>

<script>
import BaseCard from "../../components/ui/BaseCard.vue";
import BaseBadge from "../../components/ui/BaseBadge.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
export default {
  name: "CoachDetail",
components:{
  BaseCard,
  BaseBadge,
  BaseButton
},
  props:['id'],

  data(){
    return{
      selectedCoach: null
    }
  },

  computed:{
    fullName(){
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },

    contactLink(){
      return `${this.$route.path}/${this.id}/contact`
    },

    areas(){
      return this.selectedCoach.areas;
    },

    rate(){
      return this.selectedCoach.hourlyRate
    },

    description(){
      return this.selectedCoach.description
    }
  },
  created(){
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
        coach => coach.id === this.id);
  }
}
</script>

<style scoped>

</style>