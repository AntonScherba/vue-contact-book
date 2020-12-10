<template>
  <div class="container">
    <contact
      v-for="(contact, i) in contacts"
      :key="i"
      :contact="contact"
      :index="i"
      @delete-contact="deleteContact"
    />
  </div>
</template>

<script>
import Contact from "./Contact.vue";
export default {
  components: { Contact },
  name: "ContactList",
  props: {
    contacts: Array,
  },
  methods: {
    deleteContact(id) {
      this.$emit("delete-contact", id);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
