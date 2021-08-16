<template>
  <div class="app">
      <Header />
      <v-divider></v-divider>
      <v-row >
          <v-col cols="2" class="pr-0">
              <Nav />
          </v-col>
          <v-col cols="10" class="pl-0">
              <Subnav />
          </v-col>
      </v-row>
  </div>
</template>

<script lang="ts">

import { Component, Vue} from "vue-property-decorator";
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Subnav from '@/components/Subnav.vue'

@Component({
  components: {
      Header,Nav,Subnav
  },
 
})
export default class Home extends Vue {
 
}
</script>
