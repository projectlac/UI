<template>
  <v-app>
    <v-main>
      <v-row justify="center" class="ma-md-0 ma-2">
        <div class="app">
          <Header />
          <v-divider></v-divider>
          <v-row class="ma-0 ma-md-0">
            <v-col cols="2" class="pr-0 hidden-xs-only">
              <Nav />
            </v-col>
            <v-col cols="12" md="10" lg="10" sm="10" class="pl-auto pl-md-0">
              <Subnav />
            </v-col>
          </v-row>
        </div>
      </v-row>
      <div class="dark-mode">
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info" small fab @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="info" small fab @click="darkMode">
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Subnav from "@/components/Subnav.vue";

@Component({
  components: {
    Header,
    Nav,
    Subnav,
  },
})
export default class About extends Vue {
  darkMode() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
<style>
.v-main__wrap {
  background-image: url(https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg);
  background-size: cover;
  background-position: center;
}
.theme--dark .indigo--text.text--darken-2 {
  color: aliceblue !important;
}
</style>
