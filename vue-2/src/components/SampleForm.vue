<template>
  <v-card class="mx-auto" max-width="350">
    <v-card-text>
      <v-form>
        <v-text-field v-model="name" :counter="10" label="Name" />
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const name = ref('');

    return { name };
  },
});
</script>
