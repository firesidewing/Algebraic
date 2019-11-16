<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="Drawer" app clipped>
      <v-list dense>
        <v-list-item link v-on:click="Comp = 'Percent'">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Percent</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-on:click="Comp = 'Graph'">
          <v-list-item-action>
            <v-icon>mdi-percent</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >Graph</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="Drawer = !Drawer" />
      <v-toolbar-title>Algebraic</v-toolbar-title>
      <v-spacer></v-spacer>
      $USD 1.00000
      <v-icon>mdi-arrow-left-right</v-icon>
      $CAD {{ Exchange.rates.CAD }}
    </v-app-bar>

    <v-content>
      <transition name="slide-fade">
        <Percent v-if="Comp === 'Percent'"></Percent>
      </transition>
      <transition name="slide-fade">
        <Graph v-if="Comp === 'Graph'"></Graph>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Graph from "./components/graph";
import Percent from "./components/percent";
import axios from "axios";

export default {
  name: "Algebraic",
  props: {
    source: String
  },
  components: {
    Percent,
    Graph
  },
  data: () => ({
    Drawer: false,
    Comp: "Percent",
    Exchange: ''
  }),
  created() {
    this.$vuetify.theme.dark = true;
    this.GetExchangeRate();
  },
  methods: {
    GetExchangeRate() {
      var self = this;
      axios
        .get("https://api.exchangeratesapi.io/latest?symbols=CAD&base=USD")
        .then(function(response) {
          self.Exchange = response.data;
        })
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>
