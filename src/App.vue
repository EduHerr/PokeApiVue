<template>
  <h2>PokeApi Practice</h2>
  <div class="p-4 items-center justify-center">
    <div class="p-4 bg-white shadow-lg rounded-md">
      <TableCustom :headers="theads" :data="tableData">
        <tr
          v-for="(row, index) in tableData"
          :key="index"
          class="hover:bg-gray-50 transition-colors"
        >
          <td
            v-for="(celda, i) in row"
            :key="i"
            class="px-6 py-4 border-b text-gray-700 text-sm"
          >
            <span
              v-if="i.toString() === 'url'"
            >
              <InfoButton
                :id="`${celda}`"
                @on-click="setIdBerrie"
                @open-modal="openModal"
              ></InfoButton>
            </span>
            <span v-else>
              {{ celda }}
            </span>
          </td>
        </tr>
      </TableCustom>
    </div>
  </div>
  <ModalCustom :isOpen="isModalOpen" @close="closeModal">
    <TableCustom :headers="modalTheads" :data="modalTabData">
      <tr class="hover:bg-gray-50 transition-colors">
        <td class="px-6 py-4 border-b text-gray-700 text-sm">
          {{ modalTabData[0].name }}
        </td>
        <td class="px-6 py-4 border-b text-gray-700 text-sm">
          {{ modalTabData[0].size }}
        </td>
        <td class="px-6 py-4 border-b text-gray-700 text-sm">
          {{ modalTabData[0].smoothness }}
        </td>
        <td class="px-6 py-4 border-b text-gray-700 text-sm">
          {{ modalTabData[0].soil_dryness }}
        </td>
        <td class="px-6 py-4 border-b text-gray-700 text-sm">
          {{ modalTabData[0].grow_time }}
        </td>
        <td class="px-6 py-4 border-b text-gray-700 text-sm">
          {{ modalTabData[0].max_harvest }}
        </td>
      </tr>
    </TableCustom>
  </ModalCustom>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InfoButton from "@/components/modal/InfoButton.vue";
import ModalCustom from "@/components/modal/ModalCustom.vue";
import TableCustom from "@/components/TableCustom.vue";
import { HttpService } from "@/libs/modules/http/service"

@Options({
  components: {
    TableCustom,
    InfoButton,
    ModalCustom
  },
})
export default class App extends Vue {
  theads: string[] = ["Name", "Details"];
  tableData: any[] = [];
  isModalOpen = false;

  modalTheads: string[] = ['name', 'size', 'smoothness', 'soil_dryness', 'grow_time', 'max_harvest'];
  modalTabData: any = [];
  urlDetails = "";

  async mounted(){
    this.tableData = await this.getBerries();
  }

  setIdBerrie(id: string): void { 
    console.log(id);
    this.urlDetails = id; 
  }

  async getBerries(): Promise<any[] | []>{
    const httpService = new HttpService();
    const response = await httpService.get();

    if(response.status == 200){
      return response.data.results;
    }

    return [];
  }

  async getDetailBerry(url: string): Promise<any | null>{
    const httpService = new HttpService(url);
    const response = await httpService.get();
    if(response.status == 200){
      const { flavors, ...detail } = response.data;
      return detail;
    }

    return null;
  }

  async openModal(){
    this.isModalOpen = true;

    //Get the details
    const detailsBerrie = await this.getDetailBerry(this.urlDetails);
    this.modalTabData = [detailsBerrie];
  }

  closeModal(){
    this.isModalOpen = false;
  }
}
</script>
