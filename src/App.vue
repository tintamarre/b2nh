<template>
  <div id="main" class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0 pt-24">
      <h1
        class="
          text-center text-2xl
          font-bold
          leading-7
          text-gray-900
          sm:text-3xl sm:truncate
        "
      >
        {{ title }}
      </h1>
      <main class="container px-8 pt-10 mx-auto lg:px-4">
        <ExpVizus />

        <div class="flex flex-wrap" v-if="data_fetched">
          <div
            class="w-full lg:w-1/2 p-3"
            v-for="menu in fields.data.navigation_menu"
            :key="menu.id"
          >
            <div
              class="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8"
            >
              <h2 class="text-2xl font-bold text-gray-800">
                {{ menu.emoji }} {{ menu.title }}
              </h2>
              <p class="text-gray-600">
                {{ menu.description }}
                <a :href="menu.href">{{ menu.href }}</a>
                <ul v-if="menu.methods">
                  <li v-for="(method, key) in menu.methods" :key="key">{{ method.title }}: <a :href="method.href">{{ method.href }}</a></li>

                </ul>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer class="mt-auto">Footer</footer>
    </div>
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
  background: rgb(246, 255, 214);
}

.buttons {
  margin-top: 2rem;
}
</style>
