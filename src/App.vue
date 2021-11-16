<template>
  <div id="main" class="flex flex-col h-screen justify-between">
    <header class="h-10 p-4">
      <h1 class="text-gray-500 text-xl">Back 2 Natural Hazards</h1>
    </header>

    <main class="container mb-auto h-10">
      <div>
        <!-- <ul class="flex">
          <li class="mr-6">
            <router-link to="/" class="text-blue-500 hover:text-blue-800"
              >Home</router-link
            >
          </li>
          <li class="mr-6">
            <router-link to="/event" class="text-blue-500 hover:text-blue-800"
              >Event</router-link
            >
          </li>
        </ul> -->

        <router-view class="view"></router-view>
      </div>
    </main>
    <footer class="h-12 bg-gray-400 text-white text-center text-sm">
      Invented by <strong>Dr. Emmett Brown</strong> <br />
      Designed with ❤️ by fellow students.
      <a
        href="https://github.com/tintamarre/b2nh"
        target="_blank"
        class="hover:text-blue-500"
        >Source code available on GitHub.</a
      >
    </footer>
  </div>
</template>

<script>
import getDataMixin from "@/mixins/getDataMixin";

export default {
  mixins: [getDataMixin],
  name: "App",

  data: function () {
    return {
      title: "B2NH",
    };
  },
  methods: {},
  mounted() {},
  created() {
    document.title = this.title;
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 720px;
  margin: 100px auto;
  padding: 0 20px;
}

svg {
  /* important for responsiveness */
  display: block;
  fill: none;
  stroke: none;
  width: 100%;
  height: 100%;
  overflow: visible;
  /* background: rgb(246, 255, 214); */
}

.buttons {
  margin-top: 2rem;
}
</style>
