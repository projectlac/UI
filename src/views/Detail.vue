<template>
  <div class="detail ma-4">
    <v-row justify="center">
      <v-col cols="12">
        <div class="text-center" v-if="overlay">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <div v-else>
          <h6 class="text-center black--text text-h6 text-capitalize">
            {{ detailPost.title }}
          </h6>
          <router-link
            to="/photography"
            class="
              d-flex
              justify-center
              black--text
              text-subtitle-2 text-capitalize
            "
          >
            Quay lại
          </router-link>
          <v-divider class="my-3"></v-divider>
          <p class="text-subtitle-2 black--text text-capitalize">
            {{ detailPost.body }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
// import { Route } from "vue-router";
import { Action } from "vuex-class";

@Component({
  components: {},
  computed: {
    ...mapGetters({ detailPost: "detailPost", checkLoad: "checkLoad" }),
  },
  methods: {
    //   ...mapActions({getDetail:"getDetail"})
  },
})
export default class Detail extends Vue {
  detailPost!: any;
  overlay: boolean = false;
  checkLoad!: boolean;

  @Action("getDetail")
  getDetail(id: string) {
    this.getDetail(id);
  }

  created() {
    this.getDetail(this.$route.params.id);
    // console.log(this.checkLoad);
  }

  // @Watch("$route", { immediate: true, deep: true })
  // onUrlChange(newVal: Route) {

  // }
  @Watch("checkLoad")
  overload(val: boolean) {
    this.overlay = val;
    // console.log(val)
  }
}
</script>
