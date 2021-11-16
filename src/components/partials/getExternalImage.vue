<template>
  <div class="">
    <img
      :src="fields.url"
      alt=""
      v-if="data_fetched"
      class="object-none h-64 w-64 rounded-2xl shadow-2xl"
    />
    <div class="text-gray-600 text-sm">© License PIXABAY</div>
  </div>
</template>
<script>
import getDataMixin from "@/mixins/getDataMixin";

export default {
  mixins: [getDataMixin],
  // props: [page_url],
  data() {
    return {};
  },
  watch: {
    page_url: function (new_val) {
      // watch it
      this.fetchData(new_val);
    },
  },
};
</script>