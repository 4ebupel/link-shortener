<script>
export default {
  data() {
    return {
      url: ''
    };
  },
  emits: ["change"],
  methods: {
    handleSubmit() {
      this.$emit("change", this.url);
      this.url = '';
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-floating mb-3">
      <input
        v-model="url"
        class="form-control"
        id="floatingInput"
        placeholder="ZIP code"
        required
      />
      <label for="floatingInput">URL</label>
    </div>
    <button type="submit">Shorten</button>
  </form>
</template>

<style></style>
