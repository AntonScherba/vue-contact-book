<template>
  <form @submit.prevent="addInfo">
    <label>
      Title
      <input type="text" v-model="title" placeholder="Email" required v-focus />
    </label>

    <label>
      Body
      <input
        type="text"
        v-model="body"
        required
        placeholder="JaneDoe@gmail.com"
      />
    </label>
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "AddInfoForm",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    addInfo() {
      const newInfo = {
        userId: this.$route.params.id,
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.$store.commit("addInfo", newInfo);
      this.title = "";
      this.body = "";
    },
  },
};
</script>
