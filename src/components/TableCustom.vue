<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="bg-gray-100">
          <th
            v-for="header in headers"
            :key="header"
            class="px-6 py-3 text-left text-gray-600 text-sm font-medium border-b"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody v-if="data.length > 0">
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          class="hover:bg-gray-50 transition-colors"
        >
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            class="px-6 py-4 border-b text-gray-700 text-sm"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td
            :colspan="headers.length"
            class="px-6 py-4 border-b text-gray-700 text-center text-sm"
          >
            Sin registros
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TableCustom",
  props: {
    headers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
});
</script>
