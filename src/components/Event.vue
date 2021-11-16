<template>
  <div>
    <div v-if="!data_fetched"></div>
    <div class="flex flex-wrap" v-else>
      <button
        class="
          bg-transparent
          hover:bg-blue-500
          text-blue-700
          font-semibold
          hover:text-white
          py-2
          px-4
          border border-blue-500
          hover:border-transparent
          rounded
        "
        @click="reload(page_url)"
      >
        Get random
      </button>
      <div class="w-full lg:w-1/1 p-3">
        <div class="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8">
          <h1 class="text-2xl font-light text-gray-400 italic">
            {{ fields.data.emoji }} {{ fields.data.type | capitalize }}
          </h1>
          <div class="flex">
            <div class="flex-none w-4/5">
              <!-- <map-leaflet /> -->

              <h2 class="text-2xl font-bold text-gray-800">
                {{ fields.data.locationName | capitalize }}
                {{ fields.data.country | capitalize }}
                <span v-if="fields.data.volcano">
                  {{ fields.data.volcano.name | capitalize }}
                </span>
              </h2>
              <p>
                <span class="text-gray-800">{{ fields.data.dateTime }}</span>
                <span class="text-gray-400 text-sm px-2">{{
                  fields.data.dateTimeDiffForHumans
                }}</span>
              </p>

              <div
                class="
                  bg-white
                  border-1 border-gray-300
                  rounded-sm
                  shadow-lg
                  p-4
                "
                v-if="fields.data.comments"
              >
                <p class="text-gray-600" v-html="fields.data.comments">
                  {{ fields.data.comments }}
                </p>
              </div>

              <div>
                <a
                  :href="fields.data.links.self"
                  class="
                    bg-blue-500
                    hover:bg-white
                    text-white
                    hover:text-blue-500
                    py-1
                    px-4
                    border border-blue-500
                    hover:border-blue-600
                    rounded-full
                  "
                  target="_blank"
                >
                  json</a
                >

                <a
                  v-if="fields.data.external.external_map_url"
                  :href="fields.data.external.external_map_url"
                  class="
                    bg-green-500
                    hover:bg-white
                    text-white
                    hover:text-green-500
                    py-1
                    px-4
                    border border-green-500
                    hover:border-green-600
                    rounded-full
                  "
                  target="_blank"
                  >map</a
                >

                <a
                  v-if="fields.data.external.external_wikipedia_url"
                  :href="fields.data.external.external_wikipedia_url"
                  class="
                    bg-blue-500
                    hover:bg-white
                    text-white
                    hover:text-blue-500
                    py-1
                    px-4
                    border border-blue-500
                    hover:border-blue-600
                    rounded-full
                  "
                  target="_blank"
                >
                  wikipedia</a
                >
              </div>
              <div class="flex flex-wrap">
                <!-- <pre>
              {{ fields.data }}
            </pre> -->
              </div>

              <h3 class="text-xl font-bold text-gray-400">Relation</h3>
              <div v-if="fields.data.volcano">
                <div v-for="(vol, key) in fields.data.volcano" :key="key">
                  <ul>
                    <li>
                      <span class="font-bold">{{ key }}:</span> {{ vol }}
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="fields.data.earthquake_event">
                {{ fields.data.earthquake_event }}
              </div>
              <div v-if="fields.data.volcano_event">
                {{ fields.data.volcano_event }}
              </div>
              <div v-if="fields.data.tsunami_event">
                {{ fields.data.tsunami_event }}
              </div>

              <div v-if="fields.data.earthquake_events">
                {{ fields.data.earthquake_events }}
              </div>
              <div v-if="fields.data.volcano_events">
                {{ fields.data.volcano_events }}
              </div>
              <div v-if="fields.data.tsunami_events">
                {{ fields.data.tsunami_events }}
              </div>
            </div>
            <div class="flex-none w-1/5">
              <getExternalImage
                :page_url="fields.data.external.external_image"
              />
            </div>
          </div>
        </div>
      </div>
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
    // this.reload(this.page_url);
  },
};
</script>
