<template>
  <div class="product">
        <h5 class="text-subtitle-1 black--text text-left mt-5">Installed</h5>
        <ul class="product-list">
          <li v-for="chat in recent" :key="chat.id">
            <div class="avatar-product">
              <v-avatar>
                <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
              </v-avatar>
            </div>

            <div class="name-product">
              <v-list-item-title
                class="text-left"
                v-text="chat.title"
              ></v-list-item-title>
            </div>
            <div class="update-product  hidden-xs-only" >
              <v-badge
                dot
                :color="chat.active == 'Open' ? 'green' : 'blue'"
                offset-x="15"
                offset-y="5"
              >
              </v-badge>
              <v-list-item-subtitle
                class="text-left"
                v-text="chat.updated"
              ></v-list-item-subtitle>
            </div>
            <div class="action-product">
              <v-btn
                v-if="chat.active == 'Open'"
                color="black"
                rounded
                elevation="0"
                outlined
                height="30"
                class="text-subtitle-2 font-weight-regular text-capitalize"
                >{{ chat.active }}</v-btn
              >
              <!-- <v-btn
                v-else
                color="primary"
                rounded
                elevation="0"
                height="30"
                class="text-subtitle-2 font-weight-regular text-capitalize"
                >{{ chat.active }}</v-btn
              > -->
              <v-dialog v-else v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          class="
                            text-subtitle-2
                            font-weight-regular
                            text-capitalize
                          "
                          v-bind="attrs"
                          v-on="on"
                          rounded
                          height="30"
                       
                        >
                          Update
                        </v-btn>
                      </template>

                      <v-card class="white">
                        <v-card-title class="text-h6 grey lighten-2">
                          Update This App
                        </v-card-title>

                        <v-card-text class="white pt-4">
                          Adjust your selections for advanced options as desired
                          before continuing. Learn more
                          <v-checkbox
                            
                            label="Import previous settings and preferences"
                            color="indigo darken-3"
                            value="indigo darken-3"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            
                            label="Remove old versions"
                            color="indigo darken-3"
                            value="indigo darken-3"
                            hide-details
                          ></v-checkbox>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions class="white">
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                          >
                            Update
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
            </div>

            <div class="icon-product">
              <v-menu top offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="black" v-bind="attrs" v-on="on">
                    mdi-dots-horizontal
                  </v-icon>
                </template>
              </v-menu>
            </div>
          </li>
        </ul>

        <v-divider></v-divider>
      </div>
</template>

<script lang="ts">

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})

export default class Product extends Vue {
    dialog:boolean = false
   
 recent: Array<object> = [
    {
      id: 1,
      updated: "Updated",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Photoshop",
      active: "Open",
    },
    {
      id: 2,
      updated: "Update Available",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Illustrator",
      active: "Update this app",
    },
    {
      id: 3,
      updated: "Updated",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Photoshop",
      active: "Open",
    },
  ];
}
</script>

<style>

</style>