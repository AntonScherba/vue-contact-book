<template>
  <div class="contact-container" v-show="isShow">
    <div class="contact">
      <div class="contact-header">
        <h3>Add Contact</h3>
        <i @click="$emit('toggle-show')" class="close-icon">&times;</i>
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
          </div>
          <button type="submit" class="save-btn">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    isShow: {
      type: Boolean,
    },
  },
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
    submit() {
      console.log(this.name, this.phone);
      // Validate
      if (!this.validate(this.name, this.phone)) {
        return false;
      }
      // Set contact object, add to array
      const contact = {
        id: Date.now(),
        name: this.name,
        phone: this.phone,
      };
      this.$emit("add-contact", contact);

      // Reset input fields
      this.resetContactForm();
    },
    // Validate Form
    validate(name, phone) {
      // const expression = /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
      // const regex = new RegExp(expression);
      if (!name || !phone) {
        alert("Please submit values for both fields.");
        return false;
      }
      // Valid
      return true;
    },
    // Reset Contact Form
    resetContactForm() {
      this.name = "";
      this.phone = "";
    },
  },
};
</script>

<style scoped>
/* Contact */
.contact-container {
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

.contact-header {
  background: var(--primary-color);
  color: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.save-btn {
  cursor: pointer;
  color: white;
  background: var(--primary-color);
  border: none;
  height: 30px;
  width: 100px;
  border-radius: var(--border-radius);
  margin-top: 10px;
}

.save-btn:hover {
  filter: brightness(110%);
}

.save-btn:focus {
  outline: none;
}
</style>
