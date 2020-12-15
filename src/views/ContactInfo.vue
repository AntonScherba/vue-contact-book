<template>
  <div>
    <h1>Contact info</h1>
    <form @submit.prevent="addInfo">
      <label>
        Title
        <input
          type="text"
          v-model="title"
          placeholder="Email"
          required
          v-focus
        />
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
    <button class="undo" @click="undo" :disabled="!(stepIndex > 0)">
      Undo last action
    </button>
    <hr />
    <ul>
      <li v-for="(info, i) in contatsInfo" :key="i">
        <span v-if="!showEdit(info)">
          {{ `${info.title}: ${info.body}` }}
        </span>
        <form @submit.prevent="saveEdit" v-else>
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
        <div>
          <button class="edit-btn" @click="editInfo(info)">Edit</button>
          <button class="remove-btn" @click="removeInfo(info.id)">
            &times;
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  data() {
    return {
      title: "",
      body: "",
      activeEdit: null,
      changes: {},
      stepBack: [],
      stepIndex: 0,
      watching: true,
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
    editInfo(info) {
      this.activeEdit = info;
    },
    saveEdit() {
      if (!this.activeEdit) {
        return;
      }
      this.activeEdit = null;
    },
    showEdit(info) {
      return info === this.activeEdit;
    },
    removeInfo(id) {
      if (this.confirm()) {
        this.$store.commit("removeInfo", id);
      }
    },
    prev() {
      if (this.confirm()) {
        if (this.changes.title === "title") {
          this.activeEdit.title = this.changes.value;
        } else {
          this.activeEdit.body = this.changes.value;
        }
      }
    },
    undo() {
      this.watching = false;
      if (this.stepIndex > 0) {
        this.stepIndex--;
        this.$store.commit("undo", this.stepBack[this.stepIndex]);
      }
    },
    confirm() {
      return confirm("Are you sure?");
    },
    deepCoppyArray(array) {
      return JSON.parse(JSON.stringify(array));
    },
  },
  computed: {
    contatsInfo() {
      return this.$store.getters.getContactInfo(this.$route.params.id);
    },
  },
  watch: {
    contatsInfo: {
      handler: function(val) {
        if (this.watching) {
          this.stepBack.push(this.deepCoppyArray(val));
          this.stepIndex = this.stepBack.length - 1;
        } else {
          this.watching = true;
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.prev {
  cursor: pointer;
  margin-left: 1rem;
}
.undo {
  width: 100%;
  padding: 0.3rem;
  margin-top: 0.3rem;
}
</style>
