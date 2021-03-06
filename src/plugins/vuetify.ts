import Vue from 'vue';
import Vuetify from 'vuetify/';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            "hover-menu-bg" : "#fff"
          },
          dark: {
            "hover-menu-bg" : "#333"
          }
        }
      }
});
