<script>
import Form from './components/Form.vue'
import ReadyForUseUrl from './components/ReadyForUseUrl.vue'

  export default {
    components: {
    Form,
    ReadyForUseUrl
  },

    data () {
      return {
        url: ''
      }
    }
  }
</script>

<template>
  <main class="main">
    <Form @change="this.url = $event"/>
    <ReadyForUseUrl />
  </main>
</template>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
  }
</style>
