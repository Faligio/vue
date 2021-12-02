<template>
  <div class="card mt-3">
    <div class="card-header">
        <form class="form-inline">
            <div class="form-group mb-2">
                <label for="inputNumberOfVM">Machines Virtuelles</label>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <input v-model="name" type="text" class="form-control" id="inputNumberOfVM" placeholder="Nombre de VM">
            </div>
        </form>
    </div>
    <div class="card-body">
        <div class="card-columns">
            <Card id="1"/>
            <Card id="2"/>
        </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'VMManager',
  components: {
    Card
  }
}
</script>
