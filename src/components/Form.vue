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
    <div class="form-floating mb-3 form">
      <input
        v-model="url"
        class="form-control mb-3"
        id="floatingInput"
        placeholder="Your URL"
        required
      />
      <label for="floatingInput">URL</label>
      <button type="submit" class="btn btn-primary">Shorten</button>
    </div>
  </form>
</template>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form-control {
    min-width: 300px;
  }
</style>
