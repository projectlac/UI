<template>
  <div class="nav wrapper py-2 pl-5 text-left">
    <v-list dense class="py-0 transparent">
      
      <v-list-item-group color="primary" class="nav-active" v-for="(a, index) in Apps" :key="index">
        <h5 class="text-subtitle-2 black--text">{{ a.category }}</h5>
        <v-list-item v-for="(l, index) in a.list" :key="index">
          <router-link
            :to="l.url"
              active-class="active"
            class="black--text text-decoration-none d-flex"
           
          >
            <v-list-item-icon>
              <v-icon class="mr-2" v-text="l.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="l.title" > </v-list-item-title>
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
  methods:{
    clear(){}
  }
})
export default class Nav extends Vue {
  
 
  Apps: Array<Item> = [
    {
      category: "Apps",
      list: [
        { icon: "mdi-apps", title: "All Apps", url: "/" },
        { icon: "mdi-reload", title: "Updates", url: "/about" },
      ],
    },
    {
      category: "Categories",
      list: [
        { icon: "mdi-camera", title: "Photography", url: "/photography" },
        {
          icon: "mdi-arrange-send-backward",
          title: "Graphic Design",
          url: "/ui",
        },
        { icon: "mdi-message-video", title: "Video", url: "/about1" },
        { icon: "mdi-lead-pencil", title: "Illustrations", url: "/about1" },
        { icon: "mdi-responsive", title: "UI/UX", url: "/about1" },
        { icon: "mdi-cube", title: "3D/AR", url: "/about1" },
      ],
    },
    {
      category: "Fonts",
      list: [{ icon: "mdi-format-font", title: "Manage fonts", url: "/about1" }],
    },
    {
      category: "Resource",
      list: [
        { icon: "mdi-camera", title: "Stock", url: "/about1" },
        { icon: "mdi-school", title: "Tutorials", url: "/about1" },
        { icon: "mdi-camera", title: "Portfolio", url: "/about1" },
        { icon: "mdi-camera", title: "Behance", url: "/about1" },
        { icon: "mdi-forum", title: "Social Forum", url: "/about1" },
      ],
    },
  ];
  
  

  // Categories: Array<Item> = [

  // ];
  // Fonts: Array<Item> = [

  // ];
  // Resource: Array<Item> = [

  // ];
}
</script>
