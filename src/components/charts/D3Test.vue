<template>
  <svg></svg>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {},
  mounted() {
    const xScale = d3
      .scaleBand()
      .domain(this.DUMMY_DATA.map((d) => d.label))
      .rangeRound([0, 250])
      .padding(0.1);

    // const maxY = d3.max(this.DUMMY_DATA);

    const yScale = d3.scaleLinear().domain([0, 10000]).range([100, 0]);

    const container = d3.select("svg").classed("d3-container", true);
    const bars = container
      .selectAll(".bar")
      .data(this.DUMMY_DATA)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value));

    setTimeout(() => {
      bars.attr("height", (d) => 100 - yScale(d.value));
    }, 1000);
  },
  data() {
    return {
      DUMMY_DATA: [
        { hours: 1648, value: 12, label: "2007" },
        { hours: 2479, value: 10315, label: "2008" },
        { hours: 3200, value: 2541, label: "2009" },
        { hours: 1648, value: 9613, label: "2010" },
        { hours: 2479, value: 215, label: "2011" },
        { hours: 3200, value: 2541, label: "2012" },
      ],
    };
  },
};
</script>


<style>
.d3-container {
  height: 100px;
  width: 250px;
  border: 1px solid red;
}
.bar {
  fill: rgb(38, 0, 255);
}
</style>
