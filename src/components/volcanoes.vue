    <template>
  <div>
    <h1>.. from volcanoes</h1>
    <ul>
      <li v-for="volcano in volcanoes" :key="volcano.id">
        <h1 class="">{{ volcano.name }}</h1>
        <div v-if="volcano.external">
          <a
            :href="volcano.external.external_map_url"
            target="_blank"
            class="text-blue"
            >[map]</a
          >
          <img :src="volcano.external.external_image" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["volcanoes"],
  data() {
    return {};
  },
};
</script>
