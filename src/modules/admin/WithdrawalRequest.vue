<template>
  <div class="ledger-summary-container">
    <management-options />
    <table class="table table-bordered table-responsive" v-if="data !== null">
      <thead>
        <tr>
          <td>Date</td>
          <td>Requested by</td>
          <td>Amount</td>
          <td>Via</td>
          <td>Charge</td>
          <td>Total</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{item.date_human}}</td>
          <td>{{item.name}}</td>
          <td>{{currency.displayWithCurrency(item.amount, item.currency)}}</td>
          <td>
            {{item.payment_payload + '/' + item.payment_payload_value}}
          </td>
          <td>{{currency.displayWithCurrency(0, item.currency)}}</td>
          <td>{{currency.displayWithCurrency(item.amount, item.currency)}}</td>
          <td>
            <label class="badge text-uppercase" :class="{'badge-warning': item.status === 'pending', 'badge-success': item.status === 'completed'}">{{item.status}}</label>
          </td>
          <td>
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-cog"></i> 
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item"><i class="fas fa-hand-holding-usd"></i>Processing</a>
                <a class="dropdown-item"><i class="fa fa-times"></i>&nbsp;&nbsp;&nbsp;&nbsp;Cancelled</a>
                <a class="dropdown-item"><i class="fa fa-check"></i>&nbsp;&nbsp;&nbsp;Completed</a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pager
        :pages="numPages"
        :active="activePage"
        :limit="limit"
        v-if="data !== null"
        />

    <empty v-if="data === null" :title="'No withdrawals available!'" :action="'Waiting for request.'"></empty>
  </div>
</template>
<style lang="scss" scoped> 
@import "~assets/style/colors.scss";
.bg-primary{
  background-color: $primary !important; 
  color: white !important;
}
.fa{
  padding-right: 0px !important;
}
.btn-primary:hover, .dropdown button:focus, .fa:hover{
  background-color: $primary !important;
  color: $white;
}

.dropdown-item{
  padding-top: 5px !important;
  height: auto !important;
  padding-bottom: 5px !important;
}
.dropdown-item:hover{
  cursor: pointer;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import CURRENCY from 'src/services/currency.js'
import COMMON from 'src/common.js'
import Pager from 'src/components/increment/generic/pager/Pager.vue'
import propertyModal from './DeliveryFeeModal.js'
export default{
  mounted(){
    if(this.user.type !== 'ADMIN' && this.user.type !== 'BUSINESS_ADMIN' && this.user.type !== 'ACCOUNTING' && this.user.type !== 'MKTG'){
      ROUTER.push('/marketplace')
    }
    this.retrieve()
  },
  data(){
    return {
      user: AUTH.user,
      data: null,
      auth: AUTH,
      limit: 5,
      activePage: 1,
      numPages: null,
      currency: CURRENCY
    }
  },
  components: {
    'empty': require('components/increment/generic/empty/Empty.vue'),
    'basic-filter': require('components/increment/generic/filter/Basic.vue'),
    'management-options': require('modules/admin/Menu.vue'),
    'increment-modal': require('components/increment/generic/modal/Modal.vue'),
    Pager
  },
  methods: {
    retrieve(){
      let parameter = {
        sort: {
          created_at: 'desc'
        },
        limit: this.limit,
        offset: (this.activePage > 0) ? ((this.activePage - 1) * this.limit) : this.activePage
      }
      this.APIRequest('withdrawals/retrieve_requests', parameter).then(response => {
        $('#loading').css({display: 'none'})
        if(response.data.length > 0){
          this.data = response.data
          this.numPages = parseInt(response.size / this.limit) + (response.size % this.limit ? 1 : 0)
        }else{
          this.data = null
          this.numPages = null
        }
      })
    }
  }
}
</script>
