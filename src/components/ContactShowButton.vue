<template>
  <button @click="$emit('toggle-show')" class="show-contact-form">
    Add Contact
  </button>
</template>

<script>
export default {
  name: "ContactShowButton",
};
</script>

<style scoped>
.show-contact-form {
  color: white;
  font-size: 2rem;
  padding: 20px;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-transform: uppercase;
  width: 275px;
  margin: 20px 10px;
}

.show-contact-form:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
