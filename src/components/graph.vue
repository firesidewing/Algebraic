<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-sparkline
            :value="x"
            :labels="y"
            :type="ChartType"
            :label-size="3"
            :gradient="['#1b5e20', '#c8e6c9']"
            :padding="6"
            :radius="2"
            :line-width="1"
          ></v-sparkline>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn color="green darken-4" v-on:click="AddChartData">Add Data</v-btn>
      </v-col>
    </v-row>
    <v-row v-for="Data in ChartData" v-bind:key="Data.Label">
      <v-col cols="6">
        <v-card>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Vertical Data" v-model="Data.Value" single-line solo clearable></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Horizontal Data" v-model="Data.Label" single-line solo clearable></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Graph",
  data: () => ({
    ChartData: [
      {
        Label: "",
        Value: ""
      }
    ],
    ChartType: "trend"
  }),
  methods: {
    AddChartData: function() {
      this.ChartData.push({
          Label: "",
          Value: ""
      });
    }
  },
  computed: {
    x: function() {
      var Vals = []
      for (let i = 0; i < this.ChartData.length; i++) {  
        Vals.push(Number(this.ChartData[i]["Value"]))
      }
      return Vals
    },
    y: function() {
      var Vals = []
      for (let i = 0; i < this.ChartData.length; i++) {  
        Vals.push(this.ChartData[i]["Label"])
      }
      return Vals
    }
  }
};
</script>