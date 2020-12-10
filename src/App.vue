<template>
  <div id="app">
    <!-- Open Contact Form -->
    <contact-show-button @toggle-show="toggleShow" />
    <!-- Contact Form -->
    <contact-form
      @toggle-show="toggleShow"
      @add-contact="addContact"
      :isShow="isShow"
    />

    <!-- Contact List -->
    <contact-list @delete-contact="deleteContact" :contacts="contacts" />
  </div>
</template>

<script>
import ContactShowButton from "./components/ContactShowButton.vue";
import ContactForm from "./components/ContactForm.vue";
import ContactList from "./components/ContactList.vue";

export default {
  name: "App",
  components: {
    ContactShowButton,
    ContactList,
    ContactForm,
  },
  data() {
    return {
      contacts: [
        { id: 1, name: "Anton", phone: "79788417394" },
        { id: 2, name: "Victor", phone: "79788417392" },
        { id: 3, name: "Ann", phone: "79788411234" },
      ],
      isShow: false,
    };
  },
  methods: {
    addContact(contact) {
      this.contacts.push(contact);
      console.log(this.contacts);
    },
    deleteContact(id) {
      if (this.confirmDelete()) {
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
      }
    },
    confirmDelete() {
      return confirm("Do you really want to delete this contact?");
    },
    toggleShow() {
      this.isShow = !this.isShow;
      console.log(this.isShow);
    },
  },
};
</script>

<style>
:root {
  --primary-color: #7c59b0;
  --border-radius: 5px;
}

html {
  box-sizing: border-box;
}

body {
  background: var(--primary-color);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23b8b8b8' fill-opacity='0.4' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E");
  margin: 0;
  padding: 0;
}

.close-icon {
  color: white;
  cursor: pointer;
  font-size: 24px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
