<script>
import Form from "./components/Form.vue";
import ReadyForUseUrl from "./components/ReadyForUseUrl.vue";
import Loader from "./components/Loader.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import Modal from "./components/SuccessfulModal.vue";
import { shortenLink } from "./api/linkShortener.js";

export default {
  components: {
    Modal,
    ErrorMessage,
    Loader,
    Form,
    ReadyForUseUrl,
  },

  data() {
    return {
      url: "",
      readyForUseUrl: "",
      isLoading: false,
      isError: false,
    };
  },
  watch: {
    async url() {
      try {
        this.isLoading = true
        await shortenLink(this.url).then(({ data }) => {
          this.readyForUseUrl = data.link;
        });
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoading = false
      }
    },
  },
};
</script>

<template>
  <main class="main">
    <Modal />
    <ErrorMessage v-if="isError" />
    <h1 class="heading mb-5">Your Favourite Link Shortener</h1>
    <Loader v-if="isLoading" />
    <Form @change="this.url = $event" />
    <ReadyForUseUrl :url="readyForUseUrl" />
  </main>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 100vh;
}

.heading {
  position: relative;
}
</style>
