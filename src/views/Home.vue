<template>
  <MainContent />
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";
import MainContent from "@/components/MainContent.vue"

@Component({
  components: {
    MainContent
  },
 
})
export default class Home extends Vue {
 
}
</script>
