<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <p class="text-center">Type</p>
      </v-col>
      <v-btn-toggle v-model="Type" mandatory>
        <v-btn small>Margin</v-btn>
        <v-btn small>Price</v-btn>
        <v-btn small>Markup</v-btn>
        <v-btn small>Conversion</v-btn>
      </v-btn-toggle>
    </v-row>
    <v-row class="pt-5" v-show="Type == 0">
      <v-col cols="12">
        <v-text-field label="$ Cost" v-model="Margin.Cost" clearable filled></v-text-field>
        <v-text-field label="$ Price" v-model="Margin.Price" clearable filled></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="display-1">Margin</v-card-title>
          <v-card-text class="display-2">{{ CompMargin }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pt-5" v-show="Type == 1">
      <v-col cols="12">
        <v-text-field label="$ Cost" v-model="Price.Cost" clearable filled></v-text-field>
        <v-text-field label="% Margin" v-model="Price.Margin" clearable filled></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="display-1">Selling Price</v-card-title>
          <v-card-text class="display-2">{{ CompPrice }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="pt-5" v-show="Type == 2">
      <v-col cols="12"></v-col>
    </v-row>
    <v-row class="pt-5" v-show="Type == 3" justify="center">
      <v-col cols="8">
        <v-btn-toggle v-model="Conversion.Type" mandatory>
          <v-btn small>USD to CAD</v-btn>
          <v-btn small>CAD to USD</v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="$ USD"
          v-show="Conversion.Type == 0"
          v-model="Conversion.USD"
          clearable
          filled
        ></v-text-field>
        <v-text-field
          label="$ CAD"
          v-show="Conversion.Type == 1"
          v-model="Conversion.CAD"
          clearable
          filled
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline" v-show="Conversion.Type == 0">USD to CAD</v-card-title>
          <v-card-title class="headline" v-show="Conversion.Type == 1">CAD to USD</v-card-title>
          <v-card-text class="headline" v-show="Conversion.Type == 0">{{ CompConversion }}</v-card-text>
          <v-card-text class="headline" v-show="Conversion.Type == 1">{{ CompConversion }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Margin",
  props: ["ratio"],
  data: () => ({
    Type: 0,
    Margin: {
      Cost: "",
      Price: ""
    },
    Price: {
      Cost: "",
      Margin: ""
    },
    Conversion: {
      CAD: "",
      USD: "",
      Type: 0
    }
  }),
  computed: {
    CompMargin: function() {
      if (this.Margin.Price > 0) {
        return (
          (
            ((this.Margin.Price - this.Margin.Cost) / this.Margin.Price) *
            100
          ).toFixed(2) + "%"
        );
      } else {
        return "";
      }
    },
    CompPrice: function() {
      if (1 - this.Price.Margin / 100 > 0) {
        return (
          "$ " + (this.Price.Cost / (1 - this.Price.Margin / 100)).toFixed(2)
        );
      } else {
        return "";
      }
    },
    CompConversion: function() {
      if (this.Conversion.Type == 0) {
        // USD to CAD
        return "$ " + (this.Conversion.USD * this.ratio).toFixed(2);
      } else {
        // CAD to USD
        return "$ " + (this.Conversion.CAD / this.ratio).toFixed(2);
      }
    }
  }
};
</script>