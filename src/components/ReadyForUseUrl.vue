<script>
import { ref } from "vue";
export default {
  props: {
    url: "",
  },
  methods: {
    copyToClipboard(a) {
      navigator.clipboard.writeText(ref(a).value);
    },
  },
};
</script>

<template>
  <div class="card">
    <div v-if="url" class="card-body">{{ url }}</div>
    <div v-else class="card-body">Your URL will be here</div>
    <button v-if="url" @click="copyToClipboard(url)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Copy
    </button>
    <button v-else @click="copyToClipboard(url)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>
      Copy
    </button>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: row;
  min-width: 300px;
}
</style>
