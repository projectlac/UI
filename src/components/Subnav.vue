<template>
  <div class="main-content">
    
    <router-view></router-view>
  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainContent from "@/components/MainContent.vue"
@Component({
  components: {
      MainContent

  },
})
export default class Subnav extends Vue {}
</script>
