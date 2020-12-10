<template>
  <div>
    <button @click="$emit('toggle-show')" class="show-contact-form">
      Add Contact
    </button>
  </div>
</template>

<script>
export default {
  name: "ContactShowButton",
};
</script>

<style scoped>
div {
  display: flex;
}
.show-contact-form {
  color: white;
  font-size: 1.8rem;
  padding: 20px;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-transform: uppercase;
  min-width: 275px;
  margin: 20px auto;
}

.show-contact-form:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
