<template>
  <div class="contact-container" :class="{ 'show-contact': isShow }">
    <div class="contact">
      <div @click="$emit('toggle-show')" class="close-icon">&times;</div>
      <div class="contact-header">
        <h3>Add Contact</h3>
      </div>
      <div class="contact-content">
        <form @submit.prevent="submit">
          <!-- Contact Name -->
          <div class="form-group">
            <label class="form-label" for="contact-name">Name</label>
            <input class="form-input" type="text" v-model.trim="name" />
          </div>
          <!-- Contact Phone Number -->
          <div class="form-group">
            <label class="form-label" for="contact-phone">Phone Number</label>
            <input class="form-input" type="tel" v-model.trim="phone" />
            {{ name.length }}
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["isShow"],
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
    submit() {
      this.$emit("toggle-show");
      console.log(this.name, this.phone);
    },
  },
};
</script>

<style scoped>
/* Contact */
.contact-container {
  background: rgba(0, 0, 0, 0.6);
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.show-contact {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  max-width: 95%;
  width: 500px;
  animation: contactopen 1s;
}

@keyframes contactopen {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.close-icon {
  float: right;
  color: white;
  font-size: 24px;
  position: relative;
  top: 7px;
  right: 13px;
  cursor: pointer;
  font-size: 2rem;
}

.contact-header {
  background: var(--primary-color);
  color: #fff;
  padding: 15px;
}

h3 {
  margin: 0;
}

.contact-content {
  padding: 20px;
  background: whitesmoke;
}

/* Form */
.form-group {
  height: 55px;
}

.form-input {
  width: 97%;
  padding: 5px;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  display: block;
  outline: none;
}

.form-label {
  color: var(--primary-color);
  display: block;
}

button {
  cursor: pointer;
  color: white;
  background: var(--primary-color);
  border: none;
  height: 30px;
  width: 100px;
  border-radius: var(--border-radius);
  margin-top: 10px;
}

button:hover {
  filter: brightness(110%);
}

button:focus {
  outline: none;
}
</style>
