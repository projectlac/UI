<template>
  <div class="header px-4 py-md-0 py-2" >
    <v-row>
      <v-col cols="2" class=" hidden-xs-only"></v-col>
      <v-col cols="5" class=" hidden-xs-only">
        <v-tabs background-color="transparent" class="black--text">
          <v-tab class="font-weight-bold text-capitalize">Apps</v-tab>
          <v-tab class="font-weight-bold text-capitalize">Your Work</v-tab>
          <v-tab class="font-weight-bold text-capitalize">Market</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="8" md="3">
        <v-autocomplete
          solo
          class="mt-1 text-subtitle-2 search-bar black--text font-weight-regular"
          dense
          hide-details="auto"
          background-color="rgb(255 255 255 / 31%)"
          label="Search something..."
          :items="listData"
          
          v-model="dataSearch"
          prepend-inner-icon="mdi-magnify"
        ></v-autocomplete>
      </v-col>
      <v-col cols="4" md="2" class="d-flex align-center">
        <v-row justify="end" align="center" class="pr-5">
          <v-badge color="primary" content="6" overlap class="px-2" offset-x="21"  >
            <v-icon color="black">mdi-bell-outline</v-icon>
          </v-badge>
          <v-icon color="black" class="px-2  hidden-xs-only"> mdi-cloud</v-icon>
          <v-badge color="green" dot offset-x="15" offset-y="10" bottom class="px-2">
              <v-avatar size="35" color="primary">
                  CJ
              </v-avatar>
          </v-badge>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

@Component({
  components: {},
  computed: { ...mapGetters({listData: "listData"})},
  methods:{...mapActions({getData:"getData"})},
  
})
export default class Header extends Vue {


  dataSearch: string = ""

  getData!: () => any
  listData!: Array<string>

  
  created(){
    this.getData()
    console.log(this.listData)
  }
  @Watch('dataSearch')
    wSearch(){
      console.log(this.dataSearch)
    }
}
</script>
