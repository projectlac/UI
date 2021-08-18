<template>
  <div class="hello">
    <v-row justify="center" class="wrap">
      <v-col cols="12">
        <div class="about text-center mt-8">
        <h3>JSON PLACEHOLDER</h3>
        <v-list class=" transparent">
          <v-list-item v-for="data in dataPost" :key="data.id" class="text-capitalize">
             <router-link :to="'photography/'+ data.id" class="text-decoration-none black--text pl-3"> {{ data.title }} </router-link>
          </v-list-item>
        </v-list>
      </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { Title } from "@/store/Object"
@Component({
  computed: {...mapGetters({dataPost: "dataPost"})},
  methods: {...mapActions({getData:"getData"})}
 
})

export default class Photography extends Vue {
  getData!: () => any
  dataPost !: Array<Title>

  created(){
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
