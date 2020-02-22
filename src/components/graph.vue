<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-sparkline
            :value="x"
            :labels="y"
            :type="ChartType"
            :label-size="12"
            :gradient="['#1b5e20', '#c8e6c9']"
            :padding="6"
            :radius="10"
            :smooth="true"
            :auto-line-width="true"
          ></v-sparkline>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="fill-height" align="center">
      <v-col cols="6">
        <v-btn small color="green darken-4" v-on:click="AddChartData">Add Data</v-btn>
      </v-col>
      <v-col cols="6">
        <span class="pr-5">Type</span>
        <v-btn-toggle v-model="ChartType" mandatory>
          <v-btn small text value="bar">bar</v-btn>
          <v-btn small text value="trend">trend</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row v-for="(Data, index) in ChartData" v-bind:key="index">
      <v-col cols="12">
        <v-card>
          <v-row justify="center" no-gutters>
            <v-col cols="12" xs="6" sm="4" md="4" lg="2">
              <v-btn small class="ma-5" color="red" @click="DeleteChartData(index)">
                DELETE
                <v-icon right>mdi-delete</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="8" sm="8" md="8" lg="8">
              <v-text-field label="Vertical Data" v-model="Data.Value" clearable></v-text-field>
            </v-col>
            <v-col cols="8" sm="8" md="8" lg="8">
              <v-text-field label="Horizontal Data" v-model="Data.Label" clearable></v-text-field>
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
    },
    DeleteChartData: function(index) {
      this.ChartData.splice(index, 1);
    }
  },
  computed: {
    x: function() {
      var Vals = [];
      var excel;
      for (let i = 0; i < this.ChartData.length; i++) {
        var Value = this.ChartData[i]["Value"];
        if (Value && Value.includes(" ")) {
          excel = Value.split(" ").map(Number);
          if (Vals.length == 0) {
            Vals = excel;
          } else {
            Vals.concat(excel);
          }
        } else if (Value && Value.includes("\t")) {
          excel = Value.split("\t").map(Number);
          if (Vals.length == 0) {
            Vals = excel;
          } else {
            Vals.concat(excel);
          }
        } else {
          Vals.push(Number(Value));
        }
      }
      return Vals;
    },
    y: function() {
      var Vals = [];
      var excel;
      for (let i = 0; i < this.ChartData.length; i++) {
        var Label = this.ChartData[i]["Label"];
        if (Label && Label.includes(" ")) {
          excel = Label.split(" ");
          if (Vals.length == 0) {
            Vals = excel;
          } else {
            Vals.concat(excel);
          }
        } else if (Label && Label.includes("\t")) {
          excel = Label.split("\t");
          if (Vals.length == 0) {
            Vals = excel;
          } else {
            Vals.concat(excel);
          }
        } else {
          Vals.push(Label);
        }
      }
      return Vals;
    }
  }
};
</script>