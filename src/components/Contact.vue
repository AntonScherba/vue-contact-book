<template>
  <div class="item">
    <div>
      <span>{{ index + 1 }}</span>
      <span class="name">{{ contact.name }}</span>
      <span>{{ contact.phone }}</span>
    </div>
    <button @click="$emit('delete-contact', contact.id)" class="delete-btn">
      &times;
    </button>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact: Object,
    index: Number,
  },
  methods: {
    deleteContact() {
      console.log("delete");
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: var(--border-radius);
  padding: 20px;
  margin: 10px auto;
  min-width: 275px;
  width: 60%;
  cursor: default;
}

.item:hover {
  background: rgba(0, 0, 0, 0.6);
}

.name {
  margin-right: 20px;
  margin-left: 10px;
}

.name:hover {
  text-decoration: underline;
  cursor: pointer;
}

.delete-btn {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: white;
  font-weight: bold;
  outline: none;
}
</style>
