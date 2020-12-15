<template>
  <div>
    <h1>Contact list</h1>
    <form @submit.prevent="addContact">
      <label>
        Fullname
        <input
          type="text"
          v-model.trim="name"
          placeholder="Jane Doe"
          required
          v-focus
        />
      </label>
      <button type="submit">Add</button>
    </form>
    <hr />
    <ul>
      <li v-for="(contact, i) in contacts" :key="i">
        <span>
          {{ `${i + 1}.` }}
          <router-link :to="{ name: 'contact', params: { id: contact.id } }">
            <span>{{ contact.name }}</span>
          </router-link>
        </span>
        <button class="remove-btn" @click="removeContact(contact.id)">
          &times;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addContact() {
      const newContact = {
        id: Date.now(),
        name: this.name,
      };
      this.$store.commit("addContact", newContact);
      this.name = "";
    },
    removeContact(id) {
      if (this.confirmRemove()) {
        this.$store.commit("removeContact", id);
      }
    },
    confirmRemove() {
      return confirm("Are you sure?");
    },
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>
