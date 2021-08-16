<template>
  <div class="app-in-your-plan">
        <h5 class="text-subtitle-1 black--text text-left mt-5">
          Apps in your plan
        </h5>
        <v-row>
          <v-col cols="12" md="4" v-for="app in AppsInYourPlan" :key="app.id">
            <v-hover v-slot="{ hover }">
              <v-card
                class="bg-theme"
                :class="[
                  { 'on-hover': hover },
                  hover ? 'hover-menu-bg' : 'white',
                ]"
                :loading="app.isLoading"
              >
                <v-card-title> {{ app.name }}</v-card-title>
                <v-card-text class="text-left">
                  {{ app.description }}
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-row justify="end" class="pa-4">
                    <v-dialog v-model="app.dialog" width="500">
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
                          :loading="app.isLoading"
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
                            v-model="app.checkbox1"
                            label="Import previous settings and preferences"
                            color="indigo darken-3"
                            value="indigo darken-3"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            v-model="app.checkbox2"
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
                            @click="updateApp(app.id)"
                          >
                            Update
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-icon color="black" class="pl-3"
                      >mdi-dots-horizontal</v-icon
                    >
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <v-divider></v-divider>
      </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppsInYourPlan } from "@/store/Object";
@Component({
  components: {},
})
export default class AppsYourPlan extends Vue {
    AppsInYourPlan: Array<AppsInYourPlan> = [
    {
      id: 1,
      name: "Premiere Pro",
      description: "Edit, master and create fully proffesional videos",
      checkbox1: null,
      checkbox2: "indigo darken-3",
      isLoading: false,
      dialog: false,
    },
    {
      id: 2,
      name: "Photoshop",
      description: "Edit, master and create fully proffesional videos",
      checkbox1: null,
      checkbox2: "indigo darken-3",
      isLoading: false,
      dialog: false,
    },
    {
      id: 3,
      name: "After Effect",
      description: "Edit, master and create fully proffesional videos",
      checkbox1: null,
      checkbox2: "indigo darken-3",
      isLoading: false,
      dialog: false,
    },
  ];
  updateApp(id: number) {
    this.AppsInYourPlan.map((app) => {
      if (app.id === id) {
        app.isLoading = true;
        app.dialog = false;
        setTimeout(() => {
          app.isLoading = false;
        }, 2000);
      }
    });
  }
}
</script>
