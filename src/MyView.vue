<template>
  <Prism language="json">{{ content }}</Prism>
</template>

<script lang="ts">
import Prism from "vue-prism-component";
import Vue from "vue";

export default Vue.extend({
  name: "MyView",
  components: {
    Prism,
  },
  data: () => ({
    content: {
      test: "test",
    },
  }),
});
</script>
