<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left>
      <v-toolbar-title>Algebraic</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="This" v-model="Relative1" single-line solo clearable></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Relative to this" v-model="Relative2" single-line solo clearable></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title class="display-2">Percentage</v-card-title>
              <v-card-text class="display-4">{{ result }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title class="display-2">Difference</v-card-title>
              <v-card-text class="display-4">{{ diff }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    Relative1: null,
    Relative2: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  computed: {
    result: function() {
      if (this.Relative1 != null && this.Relative2 != null) {
        if (this.Relative1 / this.Relative2 > 1) {
          return (
            ((this.Relative1 / this.Relative2) * 100 - 100).toFixed(2) +
            "% Increase"
          );
        } else {
          return Math.abs((this.Relative1 / this.Relative2) * 100 - 100).toFixed(2) + "% Decrease";
        }
      } else {
        return "";
      }
    },
    diff: function() {
      if (this.Relative1 != null && this.Relative2 != null) {
        return Math.abs(this.Relative1 - this.Relative2);
      } else {
        return "";
      }
    }
  }
};
</script>
