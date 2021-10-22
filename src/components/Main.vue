<template>
  <div class="hello-world">
    <h1>{{ title }}</h1>

    <ul>
      <li v-for="volcano in data.data" :key="volcano.id">
        <h2>{{ volcano.name }}</h2>
        <img :src="volcano.external.external_image" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    title: String,
  },
  data() {
    return {
      data: "Hello Vue!",
      error: null,
    };
  },
  created() {
    // GET request using axios with error handling
    axios
      .get("http://b2nh.tintamarre.be/api/v1/volcanoes")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.data = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
