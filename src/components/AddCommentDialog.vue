<template>
  <Dialog
      v-model:visible="modalVisible"
      modal
      :header="`Agregar comentario a feature Nro ${info.featureId}`"
      :autoZIndex="false"
  >
    <div class="flex flex-col">
      <label for="">Contenido del comentario</label>
      <Textarea v-model="info.body" rows="5" cols="30" autoResize></Textarea>
    </div>
    <div class="flex justify-center my-4">
      <Button label="Guardar" icon="pi pi-disk" @click="saveComment"></Button>
    </div>
  </Dialog>
</template>

<script setup>
import {ref} from "vue";
import {saveCommentFeature} from "@/services/features/features.service.js";
import Swal from "sweetalert2";

const modalVisible = ref(false);
const info = ref({
  featureId: 0,
  body: ""
})
const openModal = (featureId) => {
  modalVisible.value = true;
  info.value.featureId = featureId;
  info.value.body = ""
}
const saveComment = async () => {
  if (info.value.body === "") {
    Swal.fire({
      icon: "warning",
      title: `Agregar comentario`,
      text: `El contenido del comentario es requerido`,
    })
    return
  }
  await saveCommentFeature(info.value.featureId, {body: info.value.body}).then(({data}) => {
    Swal.fire({
      icon: "success",
      title: `Comentario agregado`,
      text: `El comentario fue agregado correctamente`,
    })
    modalVisible.value = false;
  })
}
defineExpose({openModal});
</script>
<style scoped>

</style>