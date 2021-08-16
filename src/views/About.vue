<template>
  <HelloWorld :msg="msg" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"
@Component({
  components: {
    HelloWorld
  },
})
export default class About extends Vue {
  msg:string = "Trang About"
}
</script>
