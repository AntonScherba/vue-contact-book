<template>
  <ul>
    <!-- Компонент - информация о контакте -->
    <Info v-for="(info, i) in contatsInfo" :key="i" :info="info" />
  </ul>
</template>

<script>
import Info from "./Info";

export default {
  name: "InfoList",
  props: ["contatsInfo"],
  components: { Info },
};
</script>
