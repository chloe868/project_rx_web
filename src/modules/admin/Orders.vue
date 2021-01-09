<template>
  <div class="modal fade" id="viewOrderOnModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">View Orders</h5>
          <button type="button" class="close" @click="hideModal()" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body" v-if="data !== null">
            <center>
              <h4>Order No.{{data.checkout ? data.checkout.order_number : 'No Order Number'}}</h4>
              <p>{{data.date}}</p>
            </center>
          <div class="row">
              <p class="col 6" style="margin-left: 2%"><b>Merchant:</b> {{data.merchant_id}}</p>
              <p class="col 6" style="text-align: right; margin-right: 3%"><b>Delivered By:</b> {{data.rider}}</p>
          </div>
          <table class="table table-responsive" v-if="data !== null">
            <thead>
              <th>Products</th>
              <th>Amount</th>
              <th>Shipping Fee</th>
              <th>Status</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <!-- product -->
                </td>
                <td>
                  {{currency.displayWithCurrency(data.amount, data.checkout ? data.checkout.currency : 'PHP')}}
                </td>
                <td>
                  {{data.checkout ? data.checkout.shipping_fee : 'No Shipping Fee'}}
                </td>
                <td>
                  <label class="badge text-uppercase" :class="{'badge-warning': data.status === 'pending' || data.status === 'processing', 'badge-success': data.status === 'completed', 'badge-danger': data.status === 'declined'}">{{data.status}}</label>
                </td>
              </tr>
            </tbody>
          </table>
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
import CURRENCY from 'src/services/currency.js'
export default {
  mounted(){
  },
  data(){
    return {
      btnDisable: true,
      user: AUTH.user,
      config: CONFIG,
      currency: CURRENCY,
      data: []
    }
  },
  methods: {
    hideModal(){
      $('#viewOrderOnModal').modal('hide')
    },
    showModal(item){
      this.show(item)
      $('#viewOrderOnModal').modal('show')
    },
    show(item){
      let x = JSON.parse(item.tags)
      console.log(item)
      let condition = x.map((item) => {
        return {
          column: 'id',
          value: item,
          clause: 'or'
        }
      })
      let parameter = {
        condition: condition
      }
      console.log(parameter)
      this.APIRequest('deliveries/my_deliveries', parameter).then(response => {
        this.data = response.data[0]
        console.log('deliveries', response.data)
      })
    }
  }
}
</script>
