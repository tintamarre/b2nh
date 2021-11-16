<template>
  <div class="w-full">
    <div class="p-4">
      <div clas="p-4">
        <vue-slider
          v-model="date"
          :data="range"
          :adsorb="true"
          :marks="true"
          :enable-cross="false"
        />
      </div>

      <div class="py-10 text-right">
        <button
          @click="updateData()"
          class="
            rounded-xl
            p-2
            bg-blue-500
            text-white
            hover:bg-blue-400 hover:text-gray-900
          "
        >
          🔎 Find events</button
        ><br />
        <span class="text-sm text-gray-600"
          >between <strong>{{ date[0] }}</strong> and
          <strong>{{ date[1] }}</strong>

          <span class="text-gray-400"> {{ date[1] - date[0] }} years</span>
        </span>
      </div>
    </div>

    <div
      class="
        shadow-sm
        float-right
        bg-white
        border-2 border-gray-300
        rounded-lg
        shadow-lg
        p-8
      "
    >
      test2test
    </div>

    <div class="w-full" style="height: 500px" v-if="data_fetched">
      <l-map
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 100%"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      >
        <l-tile-layer :url="url" :attribution="attribution" />

        <l-marker :lat-lng="PointNamur">
          <l-popup>
            <l-tooltip :options="{ permanent: true, interactive: true }">
              UNamur
            </l-tooltip>
          </l-popup>
        </l-marker>

        <v-marker-cluster :options="clusterOptions">
          <l-geo-json
            :geojson="fields"
            :options="options"
            v-if="data_fetched"
          ></l-geo-json>

          <!-- <l-marker :lat-lng="PointwithPopup">
            <l-popup>
              <div @click="innerClick">
                I am a popup
                <p v-show="showParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                  sollicitudin nisi. Donec finibus semper metus id malesuada.
                </p>
              </div>
            </l-popup>
          </l-marker>
          <l-marker :lat-lng="PointwithTooltip">
            <l-tooltip :options="{ permanent: true, interactive: true }">
              <div @click="innerClick">
                I am a tooltip
                <p v-show="showParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                  sollicitudin nisi. Donec finibus semper metus id malesuada.
                </p>
              </div>
            </l-tooltip>
          </l-marker> -->
        </v-marker-cluster>
      </l-map>

      <div class="p-10">
        <ul class="flex" v-if="fields._meta.count_volcanoes">
          <li class="rounded-lg text-white px-2 bg-red-500">
            🌋Volcano {{ fields._meta.count_volcanoes }}
          </li>
        </ul>
        <ul class="flex" v-else>
          <li class="rounded-lg text-white px-4 bg-yellow-500">
            🌋 Irruption {{ fields._meta.count_volcano_events }}
          </li>
          <li class="rounded-lg text-white px-4 bg-green-500">
            🌏 Earthquake {{ fields._meta.count_earthquake_events }}
          </li>
          <li class="rounded-lg text-white px-4 bg-blue-500">
            🌊 Tsunami {{ fields._meta.count_tsunami_events }}
          </li>
          <li>
            <span class="text-gray-400 text-sm px-4"
              >total = {{ fields._meta.count_all }}</span
            >
          </li>
        </ul>

        <p>
          Center is at
          <span class="text-gray-400">{{ currentCenter }}</span> and the zoom
          is: <span class="text-gray-400">{{ currentZoom }}</span>
        </p>

        <p>
          URL: <span class="text-sm">{{ page_url }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import getDataMixin from "@/mixins/getDataMixin";
import { latLng } from "leaflet";
import VueSlider from "vue-slider-component";

import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LGeoJson,
} from "vue2-leaflet";

import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

export default {
  mixins: [getDataMixin],
  name: "MapLeaflet",
  components: {
    VueSlider,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LGeoJson,
    "v-marker-cluster": Vue2LeafletMarkerCluster,
  },

  data() {
    return {
      range: [
        -4500, 0, 1000, 1500, 1750, 1800, 1850, 1900, 1950, 1980, 1990, 2000,
        2010, 2022,
      ],
      show: true,
      custom_query: "",
      date: [-4500, 2022],
      zoom: 2,
      //   page_url: null,
      enableTooltip: true,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentCenter: latLng(47.41322, -1.219482),
      center: latLng(50.46651, 4.858293),
      PointwithPopup: latLng(47.41322, -1.219482),
      PointwithTooltip: latLng(47.41422, -1.250482),
      PointNamur: latLng(50.46651, 4.858293),
      currentZoom: 11.5,
      showParagraph: false,
      clusterOptions: {
        // showCoverageOnHover: true,
        // spiderfyOnMaxZoom: false,
        // zoomToBoundsOnClick: false,
        // removeOutsideVisibleBounds: false,
        // maxClusterRadius: 50,
        // spiderfyDistanceMultiplier: 6.17,
      },
      mapOptions: {
        zoomSnap: 0.5,
      },

      new_page_url: null,
    };
  },
  methods: {
    updateData() {
      this.data_fetched = false;
      this.custom_query =
        "http://b2nh-api.tintamarre.be/api/v1/filter_map/start/" +
        this.date[0] +
        "/end/" +
        this.date[1];
      this.fetchData(this.custom_query);
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },

    innerClick() {
      alert("Click!");
    },
  },

  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },

    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<em>" +
            feature.properties.type +
            "</em>: <strong>" +
            feature.properties.title +
            "</strong><div>" +
            feature.properties.description +
            "</div><div><a href='" +
            feature.properties.self_url +
            "'>link</a></div>",
          { permanent: false, sticky: true }
        );
        //   .style();
      };
    },
  },
};
</script>

<style scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
@import "~vue-slider-component/theme/default.css";
</style>
