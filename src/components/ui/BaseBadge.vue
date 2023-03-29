<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "BaseBadge",
  props:{
    type: String,
    title: String
  },

  computed:{
    text(){
      return this.title.toUpperCase()
    }
  }
}
</script>

<style scoped>
.badge{
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;

}

.frontend{
  background-color: #3d008d;
  color: #fff;
}

.backend{
  background-color: #71008d;
  color: #fff;
}

.career {
  color: #fff;
}
</style>