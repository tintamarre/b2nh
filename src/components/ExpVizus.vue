<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-1/1 p-3">
      <div class="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800">
          Experimentation de visualisation
        </h2>
        <p class="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia at,
          earum optio eveniet sed aperiam, nobis porro ut debitis, iure
          reiciendis ab exercitationem? Obcaecati ipsam explicabo ex animi.
          Autem, temporibus.
        </p>
        <div class="flex flex-wrap">
          <bar-chart
            :data="data_barchart"
            title="Bar Chart"
            xKey="name"
            yKey="amount"
          ></bar-chart>
          <ChartWraper />
          <ChartWraper />
          <ChartWraper />
          <ChartWraper />
          <ChartWraper />
          <ChartWraper />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_barchart: [
        {
          name: "Roses",
          amount: 25,
        },
        {
          name: "Tulips",
          amount: 40,
        },
        {
          name: "Daisies",
          amount: 15,
        },
        {
          name: "Narcissuses",
          amount: 9,
        },
      ],
    };
  },
};
</script>
