<template>
  <div
    class="modal fade"
    id="refundModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title text-light" id="exampleModalLabel">REFUND POLICY</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="guide-holder">
            <ul class="first-ul">
              <li>
                <strong>REFUND POLICY</strong>
              </li>
              <li>You shall be entitled to a refund only if you pay for your order at the time of placing your order on the Platform of R.E and only in the event of any of the following circumstances:
                <ul class="second-ul">
                   <li>Our policy lasts 12 hours only. If 12 hours have gone by since your order, unfortunately, we can’t offer you a refund or exchange.</li>
                  <li>Your eligibility for a refund depends on the status of the order and situation.</li>
                </ul>
              </li>
              <br>
              <table class="table-style">
                <thead class="text-center">
                  <tr>
                    <th scope="col">OREDER STATUS /SITUATION <br>COD/ONLINE</th>
                    <th scope="col">REFUND</th>
                    <th scope="col">AFFLICABLE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Order not in condition, damaged, tampered</td>
                    <td>PARTIAL REFUND</td>
                    <td>-BOTH-</td>
                  </tr>
                  <tr>
                    <td>Order that is returned more than 24hours after delivery</td>
                    <td>NOT REFUND</td>
                    <td>-BOTH-</td>
                  </tr>
                  <tr>
                    <td>Delivery location following outside our designated delivery zones</td>
                    <td>NOT REFUND</td>
                    <td>-BOTH-</td>
                  </tr>
                  <tr>
                    <td>Failure to contact by phone or email at the time confirming</td>
                    <td>NOT REFUND</td>
                    <td>-BOTH-</td>
                  </tr>
                  <tr>
                    <td>Cancelling the order after the time of confirmation at<br>the time of booking</td>
                    <td>NOT REFUND</td>
                    <td>-BOTH-</td>
                  </tr>
                </tbody>
              </table>
              <br>
              <table class="table-style">
                <tbody>
                  <tr class="text-center">
                    <th scope="col">MISSING / INCORRECT ORDER</th>
                    <th scope="col">REFUND</th>
                    <th scope="col">AFFLICABLE</th>
                  </tr>
                   <tr>
                    <td colspan="3">Customers are refunded for the reasons below:</td>
                  </tr>
                  <tr>
                    <td>1. Missing items - the customer didn't receive an item.</td>
                    <td>FULL REFUND	</td>
                    <td>ONLINE</td>
                  </tr>
                  <tr>
                    <td>2. Incorrect items - the customer received an item but it was not<br> as ordered.</td>
                    <td>FULL REFUND</td>
                    <td>-BOTH-</td>
                  </tr>
                  <tr>
                    <td>3. Incorrect orders - the customer received an entire order that<br> was incorrect or not theirs.</td>
                    <td>FULL REFUND</td>
                    <td>-BOTH-</td>
                  </tr>
                </tbody>
              </table>
              <li>
                NOTE: When items are missing, we'll refund the customer the sales price of the order. If an entire order is incorrect, the customer is refunded for the sales price of the order include the delivery fee.
              </li>
              <li>
                Total refunds (plus delivery fees) are deducted directly from merchant/rider partner payouts cycle. This information is reflected in merchant/riders’ terms & policy.
              </li>
              <li><strong>ADDITIONAL NON-REFUNDABLE ORDER:</strong></li>
              <ul class="second-ul">
                <li>Promos Order</li>
                <li>Discount Order</li>
                <li>Vouchers</li>
              </ul>
              <li><strong>REFUNDS PROCEDURE (if applicable)</strong></li>
              <ul class="second-ul">
                <li>We require a receipt or proof of purchase/order.</li>
                <li>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</li>
                <li>If you are approved, then your refund will be processed, and a credit will automatically be applied to your bank account, credit card or original method of payment, within a certain amount of days.</li>
                <li>
                  Runway Express will refund the total price of any cancelled order to the credit or debit card used to place the order.
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#refundModal"
          >Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.bg-primary {
  background-color: $primary !important;
}
.guide-holder {
  margin-top: 22px;
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
}
.first-ul {
  padding: 0px;
  list-style: none;
}
ul li {
  text-align: justify;
  font-size: 15px;
  color: grey;
  padding-top: 10px;
}
.second-ul {
  padding-left: 10px;
  list-style: inside;
}
.table-style{
  text-align: justify;
  font-size: 15px;
  color: grey;
}
</style>
<script>
import ROUTER from 'src/router'
import Vue from 'vue'
import AUTH from 'src/services/auth'
import COMMON from 'src/common.js'
export default {
  data() {
    return {
      user: AUTH.user,
      common: COMMON
    }
  },
  props: {},
  methods: {}
}
</script>
