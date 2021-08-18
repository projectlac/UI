<template>
  <v-container>
    <v-row justify="center">
      <div class="title text-center">
        <h4 class="text-h4 mt-5">Recruitment</h4>
        <div class="divider mb-2 mx-auto"></div>
        <p class="text-subtitle-1 mb-2">
          <i>Những thông tin tuyển dụng mới nhất sẽ được hiển thị tại đây</i>
        </p>
      </div>
      <div class="content px-4">
        <v-row>
          <v-col cols="12" md="4" v-for="l in list" :key="l.id">
            <v-card class="mx-auto mb-2 mb-md-4 " :color="l.color" dark elevation="6" style="
    flex-wrap: wrap;">
              <v-card-text
                class="text-subtitle-2 white--text font-weight-regular"
              >
                {{ l.content }}
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      sizes="15"
                      :src="l.avatar"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="text-subtitle-2">{{
                      l.name
                    }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon
                      class="mr-1"
                      :class="l.hasLike ? 'red--text' : ''"
                      @click="likeActions(l.id)"
                    >
                      mdi-heart
                    </v-icon>
                    <span
                      class="text-subtitle-2 mr-2"
                      :class="l.hasLike ? 'red--text' : ''"
                      >{{ l.like }}</span
                    >
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Provider } from "@/store/Object";
@Component
export default class Recruitment extends Vue {
  rnd(a: any, b: any) {
    return Math.floor((b - a + 1) * Math.random()) + a;
  }
  colors: Array<string> = [
    "blue",
    "indigo",
    "deep-purple",
    "cyan",
    "green",
    "orange",
    "grey darken-1",
  ];

  list: Array<Provider> = [
    {
      id: 1,
      content:
        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      name: "Evan You",
      avatar:
        "https://i.pinimg.com/originals/f0/33/d2/f033d2299f5e88f3fcdacb87b04f110e.jpg",
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      like: 252,
      hasLike: false,
    },
    {
      id: 2,
      content:
        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      name: "Evan You",
      avatar:
        "https://cdn.dribbble.com/users/4149936/screenshots/7289553/shot-cropped-1569941145214.png?compress=1&resize=400x300",
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      like: 253,
      hasLike: true,
    },
    {
      id: 3,
      content:
        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      name: "Evan You",
      avatar:
        "https://media.istockphoto.com/vectors/flat-design-vector-illustration-sunset-vector-id695112416",
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      like: 252,
      hasLike: false,
    },
    {
      id: 4,
      content:
        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      name: "Evan You",
      avatar:
        "https://media.istockphoto.com/vectors/beautiful-landscape-sunset-vector-illustration-in-flat-design-vector-id1203925652",
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      like: 252,
      hasLike: false,
    },
    {
      id: 5,
      content: "TS because most gotcha edge cases are type invalid as well.",
      name: "Evan You",
      avatar:
        "https://i.pinimg.com/originals/f0/33/d2/f033d2299f5e88f3fcdacb87b04f110e.jpg",
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      like: 252,
      hasLike: false,
    },
    {
      id: 6,
      content:
        "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.",
      name: "Evan You",
      avatar:
        "https://i.pinimg.com/originals/f0/33/d2/f033d2299f5e88f3fcdacb87b04f110e.jpg",
      color: this.colors[this.rnd(0, this.colors.length - 1)],
      like: 252,
      hasLike: false,
    },
  ];
  toggleLike(val: number) {
    this.list.map((l) => {
      if (l.id == val) {
        l.hasLike = !l.hasLike;
      }
    });
  }
  likeActions(val: number) {
    this.list.map((l) => {
      if (l.id == val) {
        l.hasLike = !l.hasLike;
        if (l.hasLike) {
          l.like++;
        } else {
          l.like--;
        }
      }
    });
  }
}
</script>

<style scoped>
.divider {
  width: 75px;
  height: 3px;
  background: #000;
}
.theme--dark .divider{
  background: aliceblue !important;
}
</style>

