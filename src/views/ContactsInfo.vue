<template>
  <div>
    <h1>Contact info</h1>
    <!-- Компонент - форма для добавления информации о контакте -->
    <AddInfoForm />

    <!-- Кнопка для отмены действия "Шаг назад" -->
    <button class="undo" @click="undo" :disabled="!(stepIndex > 0)">
      Undo last action
    </button>
    <hr />
    <!-- Компонент - список для вывода информации о контакте -->
    <InfoList :contatsInfo="contatsInfo" />
  </div>
</template>

<script>
import AddInfoForm from "../components/AddInfoForm";
import InfoList from "../components/InfoList";

export default {
  name: "ContactsInfo",
  components: {
    AddInfoForm,
    InfoList,
  },
  data() {
    return {
      stepBack: [],
      stepIndex: 0,
      watching: true,
    };
  },
  methods: {
    undo() {
      this.watching = false;
      if (this.stepIndex > 0) {
        this.stepIndex--;
        this.$store.commit("undo", this.stepBack[this.stepIndex]);
      }
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

<style scoped>
.undo {
  width: 100%;
  padding: 0.3rem;
  margin-top: 0.3rem;
}
</style>
