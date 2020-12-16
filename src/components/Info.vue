<template>
  <li>
    <!-- Компонент - форма для редактирования контактной информации -->
    <EditInfoForm v-if="isActiveEdit" @save="saveEdit" :info="info" />
    <span v-else>
      {{ `${info.title}: ${info.body}` }}
    </span>
    <div>
      <!-- Кпопка разрешения редактирования -->
      <button class="edit-btn" @click="editInfo()">Edit</button>
      <!-- Кпопка для удаления контактной информации -->
      <button class="remove-btn" @click="removeInfo(info.id)">
        &times;
      </button>
    </div>
  </li>
</template>

<script>
import EditInfoForm from "./EditInfoForm";
export default {
  name: "ContactInfo",
  components: { EditInfoForm },
  props: ["info"],
  data() {
    return {
      isActiveEdit: false,
    };
  },
  methods: {
    editInfo() {
      this.isActiveEdit = true;
    },
    saveEdit() {
      this.isActiveEdit = false;
    },
    removeInfo(id) {
      if (this.confirm()) {
        this.$store.commit("removeInfo", id);
      }
    },
    confirm() {
      return confirm("Are you sure?");
    },
  },
};
</script>

<style scoped>
.edit-btn {
  margin-right: 1rem;
}
</style>
