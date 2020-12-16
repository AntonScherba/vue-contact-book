<template>
  <form @submit.prevent="$emit('save')">
    <input
      type="text"
      v-model="info.title"
      @focus="changes = { title: 'title', value: info.title }"
      required
      v-focus
    />
    <input
      type="text"
      v-model="info.body"
      @focus="changes = { title: 'body', value: info.body }"
      required
    />
    <button type="submit">Save</button>
    <button type="button" class="prev" @click="prev">Prev</button>
  </form>
</template>

<script>
export default {
  name: "EditInfoForm",
  props: ["info"],
  data() {
    return {
      changes: {},
    };
  },
  methods: {
    prev() {
      if (this.confirm()) {
        if (this.changes.title === "title") {
          this.info.title = this.changes.value;
        } else {
          this.info.body = this.changes.value;
        }
      }
    },
    confirm() {
      return confirm("Are you sure?");
    },
  },
};
</script>

<style scoped>
.prev {
  cursor: pointer;
  margin-left: 1rem;
}
</style>
