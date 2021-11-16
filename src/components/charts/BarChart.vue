<template>
  <div>
    <D3BarChart
      :config="chart_config"
      :datum="chart_data"
      :title="chart_title"
      :source="chart_source"
    ></D3BarChart>

    <!-- value control -->
    <select v-model="chart_config.values">
      <option
        :value="[d]"
        v-for="(d, index) in ['hours', 'production']"
        :key="index"
      >
        {{ d }}
      </option>
    </select>

    <!-- current control -->
    <select v-model="chart_config.currentKey">
      <option :value="d.year" v-for="(d, index) in chart_data" :key="index">
        {{ d.year }}
      </option>
    </select>
  </div>
</template>

<script>
import { D3BarChart } from "vue-d3-charts";

export default {
  name: "BarChart",
  components: {
    D3BarChart,
  },
  props: {},
  mounted() {},
  data() {
    return {
      chart_title: "Your title goes here",
      chart_source: "Source: https://www.ngdc.noaa.gov",
      chart_data: [
        { hours: 1648, production: 9613, year: "2007" },
        { hours: 2479, production: 6315, year: "2008" },
        { hours: 3200, production: 2541, year: "2009" },
        { hours: 1648, production: 9613, year: "2010" },
        { hours: 2479, production: 6315, year: "2011" },
        { hours: 3200, production: 2541, year: "2012" },
      ],
      chart_config: {
        key: "year",
        currentKey: "2008",
        values: ["hours", "production"],
        transition: { ease: "easeBounceOut", duration: 1000 },
        axis: {
          yTicks: 0,
        },
        color: {
          default: "#222f3e",
          current: "#41B882",
        },
      },
    };
  },
};
</script>

