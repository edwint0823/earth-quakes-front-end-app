<template>
  <div class="flex justify-center mb-5">
    <span class="font-extrabold text-3xl">Listado de terremotos</span>
  </div>

  <span class="font-bold mb-2">Filtros</span>
  <div class="grid grid-cols-1 md:grid-cols-2 mb-4">
    <div class="flex flex-col gap-2">
      <span class="font-sembolds">Tipo Magnitud: </span>
      <MultiSelect v-model="mag_type" display="chip" :options="magTypeOptions" optionLabel="name"
                   placeholder="Seleccione los tipos de magnitudes" class="w-full"/>
    </div>
    <div class="flex justify-end items-end gap-2">
      <Button label="Buscar" icon="pi pi-search" @click="getFeatures"/>
      <Button label="limpiar" icon="pi pi-eraser" outlined severity="info" @click="clearMagType"></Button>
    </div>
  </div>
  <DataTable :value="features">
    <template #empty>
      <div class="flex justify-center">
        <span class="font-semibold">No hay registros para mostrar</span>
      </div>

    </template>
    <!--    <Column field="id" header="ID"></Column>-->
    <Column field="attributes.place" header="Lugar"/>
    <Column field="attributes.magnitude" header="Magnitud"/>
    <Column header="Tsunami">
      <template #body="slotProps">
        <span>{{ slotProps.data.attributes.tsunami ? "SI" : "No" }}</span>
      </template>
    </Column>
    <Column field="attributes.mag_type" header="Tipo magnitud"/>
    <Column field="attributes.coordinates.longitude" header="Longitud"/>
    <Column field="attributes.coordinates.latitude" header="Latitud"/>
    <Column header="Acciones">
      <template #body="{data}">
        <div class="flex justify-center">
          <Button v-tooltip.top="'Agregar comentario'" icon="pi pi-plus"
                  @click="addComment(data.id)"/>
        </div>
      </template>
    </Column>
    <template #footer>
      <Paginator
          v-model="paginator.page"
          :rows="paginator.per_page"
          :totalRecords="paginator.total"
          :rowsPerPageOptions="[10, 20, 30]"
          @page="onPageChange"
      />
    </template>
  </DataTable>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {paginateFeatures} from "@/services/features/features.service.js";
import {magTypeListOpts} from "@/core/constants.js";

const features = ref([])
const mag_type = ref()
const paginator = ref({
  page: 1,
  per_page: 10,
  total: 0,
})
const magTypeOptions = ref(magTypeListOpts)
const getFeatures = async () => {
  const payload = {
    page: paginator.value.page,
    per_page: paginator.value.per_page,
  }
  if (mag_type.value !== undefined && mag_type.value.length) {
    payload["mag_type"] = mag_type.value.map(m => m.value).join(",")
  }

  await paginateFeatures(payload).then(({data}) => {
    features.value = data.data
    paginator.value.total = data.pagination.total
    console.log(data)
  })
}

const onPageChange = (event) => {
  paginator.value.per_page = event.rows;
  paginator.value.page = event.first + 1;
  getFeatures();
};
const clearMagType = () => {
  mag_type.value = undefined
  getFeatures()
}
const addComment = (featureId) => {
  console.log(featureId)
}
onMounted(() => {
  getFeatures()
})
</script>
