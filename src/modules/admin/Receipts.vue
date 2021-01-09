<template>
  <div class="modal fade" id="viewProductOnModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">View Receipt</h5>
          <button type="button" class="close" @click="hideModal()" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div>
              <img style="height: 350px; width: 350px" :src="config.BACKEND_URL + item" v-for="(item, index) in data" :key="index">
            </div>
        </div> 
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="hideModal()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
  .bg-primary{
    background: $primary !important;
  }
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
export default {
  mounted(){
  },
  data(){
    return {
      btnDisable: true,
      user: AUTH.user,
      config: CONFIG,
      data: []
    }
  },
  methods: {
    hideModal(){
      $('#viewProductOnModal').modal('hide')
    },
    showModal(item){
      $('#viewProductOnModal').modal('show')
      this.show(item)
    },
    show(item){
      this.data = JSON.parse(item.files)
      console.log('adflkajsj', this.data, this.data.length)
    }
  }
}
</script>
