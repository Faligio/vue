<template>
  <div class="home">
    <Formulaire/>
    <VMManager/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulaire from '@/components/Formulaire.vue'
import VMManager from '@/components/VMManager.vue'
export default {
  name: 'Home',
  components: {
    Formulaire,
    VMManager
  }

}
</script>
