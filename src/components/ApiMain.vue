<template>
  <div>
    <div v-if="data_fetched">
      <ul>
        <li v-for="(link, key) in fields.data.navigation_menu" :key="key">
          <button @click="reload(link.url, link.title)">
            {{ link.title }}
          </button>
        </li>
      </ul>
      <volcanoes
        :volcanoes="fields.data"
        v-if="current_page == 'volcanoes'"
      ></volcanoes>
      <!-- <events :events="fields.data"></events> -->

      <nav-pagination
        :meta="fields.meta"
        v-if="fields.meta.links"
      ></nav-pagination>
    </div>
  </div>
</template>

<script>
import getDataMixin from "@/mixins/getDataMixin";

export default {
  mixins: [getDataMixin],
  data() {
    return {
      current_page: null,
      link: null,
    };
  },
  methods: {
    reload(page_url, title) {
      if (page_url) {
        this.fetchData(page_url);
        this.current_page = title;
      }
    },
  },
  mounted() {
    this.reload(this.page_url);
  },
};
</script>
