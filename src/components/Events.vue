<template>
  <div>
    <h1>.. from events</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.locationName }}
        {{ event.year }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["events"],
  data() {
    return {};
  },
};
</script>
