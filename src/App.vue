<template>
  <TableCustom :headers="theads" :data="tableData"></TableCustom>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TableCustom from "./components/TableCustom.vue";

@Options({
  components: {
    TableCustom,
  },
})
export default class App extends Vue {
  theads: string[] = ["Berries", "Description"];
  tableData: any[] = [];
}
</script>
