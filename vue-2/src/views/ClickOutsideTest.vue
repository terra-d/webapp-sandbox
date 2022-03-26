<template>
  <v-container>
    <sample-form />
    <v-snackbar v-model="snackbar" :timeout="1000"> Clicked outside! </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import SampleForm from '@/components/SampleForm.vue';

export default defineComponent({
  name: 'ClickOutsideTest',
  components: { SampleForm },
  setup() {
    const snackbar = ref(false);
    return { snackbar };
  },
});
</script>
