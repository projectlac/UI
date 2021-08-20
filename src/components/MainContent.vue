<template>
  <div class="allApps">
    <div class="subnav">
      <v-row>
        <v-col cols="4" class="d-md-flex align-center hidden-xs-only">
          <h5 class="text-subtitle-2 black--text text-left pl-4">All Apps</h5>
        </v-col>
        <v-col cols="12" md="8">
          <v-tabs
            background-color="transparent"
            v-model="tab"
            class="black--text justify-center justify-md-start d-flex"
          >
            <v-tab  v-for="item in items"
            :key="item" class="font-weight-regular text-capitalize"> {{ item }}</v-tab>
            <!-- <v-tab class="font-weight-regular text-capitalize">Mobile</v-tab>
            <v-tab class="font-weight-regular text-capitalize">App</v-tab> -->
          </v-tabs>
        </v-col>
      </v-row>
    </div>

    <div class="main__content">
      <v-tabs-items v-model="tab" class="transparent">
        <v-tab-item>
          <div class="content-wrapper-header">
            <div class="content-wrapper-context text-left">
              <h3 class="img-content">
                <svg viewBox="0 0 512 512">
                  <path
                    d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
                    fill="#d6355b"
                    data-original="#ff468c"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
                    fill="#d6355b"
                    data-original="#d72878"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
                    fill="#2e000a"
                    data-original="#700029"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
                    fill="#2e000a"
                    data-original="#4d0e06"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
                    fill="#d6355b"
                    data-original="#ff468c"
                  />
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
                    fill="#d6355b"
                    data-original="#d72878"
                  />
                </svg>
                Adobe Stock
              </h3>
              <div class="content-text">
                Grab yourself 10 free images from Adobe Stock in a 30-day free
                trial plan and find perfect image, that will help you with your
                new project.
              </div>
              <button class="content-button">Start free trial</button>
            </div>
            <img
              class="content-wrapper-img"
              src="https://assets.codepen.io/3364143/glass.png"
              alt=""
            />
          </div>
          <Product />
          <AppsInYourPlan />
        </v-tab-item>
        <v-tab-item>
         1
        </v-tab-item>
        <v-tab-item>
          2
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Product from "@/components/Product.vue";
import AppsInYourPlan from "@/components/AppsInYourPlan.vue";
@Component({
  components: {
    Product,
    AppsInYourPlan,
  },
})
export default class MainContent extends Vue {
  tab: any = null;
  items: Array<string> = ["Desktop", "Mobile", "App"];
}
</script>
