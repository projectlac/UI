<template>
  <div class="nav wrapper py-2 pl-5 text-left">
    <h5 class="text-subtitle-1">App</h5>
    <v-list dense class="py-0 transparent">
      <v-list-item-group color="primary">
        <v-list-item v-for="(l, index) in Apps" :key="index">
          <router-link :to="l.url" class="black--text text-decoration-none d-flex">
            <v-list-item-icon>
            <v-icon class="mr-2" v-text="l.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="l.title"> </v-list-item-title>
          </v-list-item-content>
       
          </router-link>
           </v-list-item>
      </v-list-item-group>
    </v-list>
    <h5 class="text-subtitle-1">Categories</h5>
    <v-list dense class="py-0 transparent">
      <v-list-item-group color="primary">
        <v-list-item v-for="(l, index) in Categories" :key="index">
           <router-link :to="l.url" class="black--text text-decoration-none d-flex">
            <v-list-item-icon>
            <v-icon class="mr-2" v-text="l.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="l.title"> </v-list-item-title>
          </v-list-item-content>
       
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <h5 class="text-subtitle-1">Fonts</h5>
    <v-list dense class="py-0 transparent">
      <v-list-item-group color="primary">
        <v-list-item v-for="(l, index) in Fonts" :key="index">
           <router-link :to="l.url" class="black--text text-decoration-none d-flex">
            <v-list-item-icon>
            <v-icon class="mr-2" v-text="l.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="l.title"> </v-list-item-title>
          </v-list-item-content>
       
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <h5 class="text-subtitle-1">Resource Links</h5>
    <v-list dense class="py-0 transparent">
      <v-list-item-group color="primary">
        <v-list-item v-for="(l, index) in Resource" :key="index">
          <router-link :to="l.url" class="black--text text-decoration-none d-flex">
            <v-list-item-icon>
            <v-icon class="mr-2" v-text="l.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="l.title"> </v-list-item-title>
          </v-list-item-content>
       
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/store/Object";

@Component({
  components: {},
})
export default class Nav extends Vue {
  Apps: Array<Item> = [
    { icon: "mdi-apps", title: "All Apps", url:"/" },
    { icon: "mdi-reload", title: "Updates", url:"/about"},
  ];
  Categories: Array<Item> = [
      {icon: "mdi-camera", title: "Photography", url:"/about"},
      {icon: "mdi-arrange-send-backward", title: "Graphic Design", url:"/about"},
      {icon: "mdi-message-video", title: "Video", url:"/about"},
      {icon: "mdi-lead-pencil", title: "Illustrations", url:"/about"},
      {icon: "mdi-responsive", title: "UI/UX", url:"/about"},
      {icon: "mdi-cube", title: "3D/AR", url:"/about"}
  ];
  Fonts: Array<Item> = [
      {icon: "mdi-format-font", title: "Manage fonts", url:"/about"},   
  ];
  Resource: Array<Item> = [
      {icon: "mdi-camera", title: "Stock", url:"/about"},   
      {icon: "mdi-school", title: "Tutorials", url:"/about"},   
      {icon: "mdi-camera", title: "Portfolio", url:"/about"},   
      {icon: "mdi-camera", title: "Behance", url:"/about"},   
      {icon: "mdi-forum", title: "Social Forum", url:"/about"},   
  ]


}
</script>
