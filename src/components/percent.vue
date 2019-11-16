<template>
  <v-container>
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
          <v-card-title class="display-1">Percentage</v-card-title>
          <v-card-text class="display-2">{{ result }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="display-1">Difference</v-card-title>
          <v-card-text class="display-2">{{ diff }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Percent',
  data: () => ({
    Relative1: null,
    Relative2: null,
  }),
  computed: {
    result: function() {
      if (this.Relative1 != null && this.Relative2 != null) {
        if (this.Relative1 / this.Relative2 > 1) {
          return (
            ((this.Relative1 / this.Relative2) * 100 - 100).toFixed(2) +
            "% Increase"
          );
        } else {
          return (
            Math.abs((this.Relative1 / this.Relative2) * 100 - 100).toFixed(2) +
            "% Decrease"
          );
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
  },
};
</script>